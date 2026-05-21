package com.surakshit.backend.dto;

public class DashboardStatsResponse {

    private int totalScans;

    private int dangerousScans;

    private int safeScans;

    private double privacyScore;

    public DashboardStatsResponse(
            int totalScans,
            int dangerousScans,
            int safeScans,
            double privacyScore
    ) {

        this.totalScans = totalScans;

        this.dangerousScans = dangerousScans;

        this.safeScans = safeScans;

        this.privacyScore = privacyScore;
    }

    public int getTotalScans() {
        return totalScans;
    }

    public int getDangerousScans() {
        return dangerousScans;
    }

    public int getSafeScans() {
        return safeScans;
    }

    public double getPrivacyScore() {
        return privacyScore;
    }
}