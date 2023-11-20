package com.example.registration.Entity;
import jakarta.persistence.*;



@Entity
@Table(name="student1")
public class Emp
{
    @Id
    @Column(name="user_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userId;

    @Column(name="user_name", length = 255)
    private String userName;

    @Column(name="user_status", length = 255)
    private String userSta;

    @Column(name="Warden_id", length = 255)
    private String warId;


    @Column(name="user_email", length = 255)
    private String userEmail;

    @Column(name="user_pass", length = 255)
    private String userPass;

//    @Column(name="mobile", length = 20)
//    private String mobile;


    public Emp(int userId, String userName, String userSta, String warId, String userEmail, String userPass) {
        this.userId = userId;
        this.userName = userName;
        this.userSta = userSta;
        this.warId = warId;
        this.userEmail = userEmail;
        this.userPass = userPass;
    }

    public Emp() {

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
        return "Emp{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", userSta='" + userSta + '\'' +
                ", warId='" + warId + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", userPass='" + userPass + '\'' +
                '}';
    }
}

