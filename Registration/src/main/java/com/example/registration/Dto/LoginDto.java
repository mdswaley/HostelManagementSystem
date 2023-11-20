package com.example.registration.Dto;

public class LoginDto {
    private String userEmail;
    private String userPass;
    private String warId;

    public LoginDto(String userEmail, String userPass, String warId) {
        this.userEmail = userEmail;
        this.userPass = userPass;
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

    public String getWarId() {
        return warId;
    }

    public void setWarId(String warId) {
        this.warId = warId;
    }
}
