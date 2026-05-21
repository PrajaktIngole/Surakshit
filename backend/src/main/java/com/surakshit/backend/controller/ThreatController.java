package com.surakshit.backend.controller;

import com.surakshit.backend.dto.ThreatRequest;
import com.surakshit.backend.dto.ThreatResponse;

import com.surakshit.backend.entity.ThreatHistory;
import com.surakshit.backend.repository.ThreatHistoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.surakshit.backend.service.VirusTotalService;

import com.surakshit.backend.dto.DashboardStatsResponse;

import com.surakshit.backend.dto.WeeklyAnalyticsResponse;

import java.time.DayOfWeek;

import java.time.format.TextStyle;

import java.util.Locale;

import java.util.Map;

import java.util.LinkedHashMap;

import java.util.ArrayList;

import java.time.LocalDateTime;
import java.util.List;
import org.json.JSONObject;
@RestController
@RequestMapping("/api/threat")

public class ThreatController {



    @Autowired
    private ThreatHistoryRepository repository;

    @Autowired
    private VirusTotalService virusTotalService;



    @PostMapping("/scan")
    public ThreatResponse scanThreat(
            @RequestBody ThreatRequest request
    ) {

        String status;
        String message;

        String url = request.getUrl();
        JSONObject virusTotalResult =
                virusTotalService.scanUrl(url);

        JSONObject stats =
                virusTotalResult
                        .getJSONObject("data")
                        .getJSONObject("attributes")
                        .getJSONObject("stats");

        int malicious =
                stats.getInt("malicious");

        int suspicious =
                stats.getInt("suspicious");

        int harmless =
                stats.getInt("harmless");

        System.out.println("Malicious: " + malicious);

        System.out.println("Suspicious: " + suspicious);

        System.out.println("Harmless: " + harmless);

        System.out.println(virusTotalResult);

        if (
                url.contains("hack") ||
                        url.contains("phishing") ||
                        url.contains("free-money")
        ) {

            status = "Dangerous";

            message =
                    "Potential phishing or malicious website detected.";

        } else {

            status = "Safe";

            message =
                    "No suspicious activity detected.";
        }

        // Save History
        ThreatHistory history = new ThreatHistory();

        history.setEmail(request.getEmail());

        history.setUrl(url);

        history.setStatus(status);

        history.setMessage(message);

        history.setScannedAt(LocalDateTime.now());

        repository.save(history);

        int threatScore =
                (malicious * 20)
                        + (suspicious * 10);

        if (threatScore > 100) {
            threatScore = 100;
        }

        return new ThreatResponse(
                status,
                message,
                malicious,
                suspicious,
                harmless,
                threatScore
        );
    }

    @GetMapping("/history/{email}")

    public List<ThreatHistory> getHistory(
            @PathVariable String email
    ) {

        return repository
                .findByEmailOrderByScannedAtDesc(email);
    }

    @GetMapping("/stats/{email}")

    public DashboardStatsResponse getStats(
            @PathVariable String email
    ) {

        int totalScans =
                repository.countByEmail(email);

        int dangerousScans =
                repository.countByEmailAndStatus(
                        email,
                        "Dangerous"
                );

        int safeScans =
                repository.countByEmailAndStatus(
                        email,
                        "Safe"
                );

        double privacyScore = 0;

        if (totalScans > 0) {

            privacyScore =
                    ((double) safeScans
                            / totalScans) * 100;
        }

        return new DashboardStatsResponse(
                totalScans,
                dangerousScans,
                safeScans,
                privacyScore
        );

    }

    @GetMapping("/weekly/{email}")

    public List<WeeklyAnalyticsResponse>
    getWeeklyAnalytics(

            @PathVariable String email
    ) {

        List<ThreatHistory> history =
                repository.findByEmail(email);

        Map<String, WeeklyAnalyticsResponse>
                weeklyMap =
                new LinkedHashMap<>();

        String[] days = {
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
        };

        for (String day : days) {

            weeklyMap.put(
                    day,

                    new WeeklyAnalyticsResponse(
                            day,
                            0,
                            0,
                            0
                    )
            );
        }

        for (ThreatHistory item : history) {

            DayOfWeek dayOfWeek =
                    item.getScannedAt()
                            .getDayOfWeek();

            String shortDay =
                    dayOfWeek
                            .getDisplayName(
                                    TextStyle.SHORT,
                                    Locale.ENGLISH
                            );

            shortDay =
                    shortDay.substring(0, 3);

            WeeklyAnalyticsResponse current =
                    weeklyMap.get(shortDay);

            if (current != null) {

                int scans =
                        current.getScans() + 1;

                int threats =
                        current.getThreats();

                int dangerous =
                        current.getDangerous();

                if (
                        item.getStatus()
                                .equals("Dangerous")
                ) {

                    threats++;

                    dangerous++;
                }

                weeklyMap.put(
                        shortDay,

                        new WeeklyAnalyticsResponse(
                                shortDay,
                                scans,
                                threats,
                                dangerous
                        )
                );
            }
        }

        return new ArrayList<>(
                weeklyMap.values()
        );
    }



}