package com.example.registration.Dto;

public class AddStuDto {
    private Long stuId;
    private String userName;
    private String stuReg;
    private String stuStatus;

    private int stuContact;
    private String stuAddress;
    private String stuCity;
    private int stuFatherCon;

    private String stuHostNo;

    private String stuRoomNo;

    private String stuCatg;

    public AddStuDto(Long stuId, String userName, String stuReg, String stuStatus, int stuContact, String stuAddress, String stuCity, int stuFatherCon, String stuHostNo, String stuRoomNo, String stuCatg) {
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
