package com.example.registration.Dto;


public class EmpDto {


    private int userId;
    private String userName;
    private String userSta;
    private String warId;
    private String userEmail;
    private String userPass;


    public EmpDto(int userId, String userName, String userSta, String warId, String userEmail, String userPass) {
        this.userId = userId;
        this.userName = userName;
        this.userSta = userSta;
        this.warId = warId;
        this.userEmail = userEmail;
        this.userPass = userPass;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserSta() {
        return userSta;
    }

    public void setUserSta(String userSta) {
        this.userSta = userSta;
    }

    public String getWarId() {
        return warId;
    }

    public void setWarId(String warId) {
        this.warId = warId;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPass() {
        return userPass;
    }

    public void setUserPass(String userPass) {
        this.userPass = userPass;
    }

    @Override
    public String toString() {
        return "EmpDto{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", userSta='" + userSta + '\'' +
                ", warId='" + warId + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", userPass='" + userPass + '\'' +
                '}';
    }
}