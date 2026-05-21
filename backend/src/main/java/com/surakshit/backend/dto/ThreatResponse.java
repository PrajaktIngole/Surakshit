package com.surakshit.backend.dto;

public class ThreatResponse {

    private String status;

    private String message;

    private int malicious;

    private int suspicious;

    private int harmless;

    private int threatScore;

    public ThreatResponse(
            String status,
            String message,
            int malicious,
            int suspicious,
            int harmless,
            int threatScore
    ) {

        this.status = status;
        this.message = message;

        this.malicious = malicious;

        this.suspicious = suspicious;

        this.harmless = harmless;

        this.threatScore = threatScore;
    }

    public String getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }

    public int getMalicious() {
        return malicious;
    }

    public int getSuspicious() {
        return suspicious;
    }

    public int getHarmless() {
        return harmless;
    }

    public int getThreatScore() {
        return threatScore;
    }
}