package com.surakshit.backend.dto;

public class WeeklyAnalyticsResponse {

    private String day;

    private int scans;

    private int threats;

    private int dangerous;

    public WeeklyAnalyticsResponse(
            String day,
            int scans,
            int threats,
            int dangerous
    ) {

        this.day = day;

        this.scans = scans;

        this.threats = threats;

        this.dangerous = dangerous;
    }

    public String getDay() {
        return day;
    }

    public int getScans() {
        return scans;
    }

    public int getThreats() {
        return threats;
    }

    public int getDangerous() {
        return dangerous;
    }
}