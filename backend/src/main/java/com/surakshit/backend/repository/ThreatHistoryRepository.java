package com.surakshit.backend.repository;

import com.surakshit.backend.entity.ThreatHistory;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ThreatHistoryRepository
        extends JpaRepository<ThreatHistory, Long> {

    List<ThreatHistory> findByEmailOrderByScannedAtDesc(
            String email
    );

    List<ThreatHistory>
    findByEmail(String email);

    int countByEmail(String email);

    int countByEmailAndStatus(
            String email,
            String status
    );
}