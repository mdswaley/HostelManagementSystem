package com.example.registration.Entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "attendance_table")
public class TakingAttendance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String registrationNumber;

    @Column(name = "attendance_date")
    private LocalDate attendanceDate;



    public TakingAttendance(Long id, String name, String registrationNumber, LocalDate attendanceDate) {
        this.id = id;
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.attendanceDate = attendanceDate;
    }

    public TakingAttendance() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public LocalDate getAttendanceDate() {
        return attendanceDate;
    }

    public void setAttendanceDate(LocalDate attendanceDate) {
        this.attendanceDate = attendanceDate;
    }
}