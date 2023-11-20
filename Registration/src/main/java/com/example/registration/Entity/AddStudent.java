package com.example.registration.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="addstudent")
public class AddStudent {
    @Id
//    @Column(name="stu_id", length = 45)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long stuId;

    @Column(name="student_name", length = 255)
    private String userName;

    @Column(name="student_reg", length = 255)
    private String stuReg;

    @Column(name="student_status", length = 255)
    private String stuStatus;

    @Column(name="student_cont", length = 25)
    private int stuContact;

    @Column(name="student_address", length = 255)
    private String stuAddress;

    @Column(name="student_city", length = 255)
    private String stuCity;

    @Column(name="student_father_cont", length = 25)
    private int stuFatherCon;

    @Column(name="student_Host_No", length = 255)
    private String stuHostNo;

    @Column(name="student_Room_No", length = 255)
    private String stuRoomNo;

    @Column(name="student_category", length = 255)
    private String stuCatg;




    public AddStudent(Long stuId, String userName, String stuReg, String stuStatus, int stuContact, String stuAddress, String stuCity, int stuFatherCon, String stuHostNo, String stuRoomNo, String stuCatg) {
        this.stuId = stuId;
        this.userName = userName;
        this.stuReg = stuReg;
        this.stuStatus = stuStatus;
        this.stuContact = stuContact;
        this.stuAddress = stuAddress;
        this.stuCity = stuCity;
        this.stuFatherCon = stuFatherCon;
        this.stuHostNo = stuHostNo;
        this.stuRoomNo = stuRoomNo;
        this.stuCatg = stuCatg;
    }

    public AddStudent() {

    }

    public Long getStuId() {
        return stuId;
    }

    public void setStuId(Long stuId) {
        this.stuId = stuId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getStuReg() {
        return stuReg;
    }

    public void setStuReg(String stuReg) {
        this.stuReg = stuReg;
    }

    public String getStuStatus() {
        return stuStatus;
    }

    public void setStuStatus(String stuStatus) {
        this.stuStatus = stuStatus;
    }

    public int getStuContact() {
        return stuContact;
    }

    public void setStuContact(int stuContact) {
        this.stuContact = stuContact;
    }

    public String getStuAddress() {
        return stuAddress;
    }

    public void setStuAddress(String stuAddress) {
        this.stuAddress = stuAddress;
    }

    public String getStuCity() {
        return stuCity;
    }

    public void setStuCity(String stuCity) {
        this.stuCity = stuCity;
    }

    public int getStuFatherCon() {
        return stuFatherCon;
    }

    public void setStuFatherCon(int stuFatherCon) {
        this.stuFatherCon = stuFatherCon;
    }

    public String getStuHostNo() {
        return stuHostNo;
    }

    public void setStuHostNo(String stuHostNo) {
        this.stuHostNo = stuHostNo;
    }

    public String getStuRoomNo() {
        return stuRoomNo;
    }

    public void setStuRoomNo(String stuRoomNo) {
        this.stuRoomNo = stuRoomNo;
    }

    public String getStuCatg() {
        return stuCatg;
    }

    public void setStuCatg(String stuCatg) {
        this.stuCatg = stuCatg;
    }


}
