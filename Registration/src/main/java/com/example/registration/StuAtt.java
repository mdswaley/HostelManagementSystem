package com.example.registration;

import com.example.registration.Entity.TakingAttendance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StuAtt extends JpaRepository<TakingAttendance, Long> {
}
