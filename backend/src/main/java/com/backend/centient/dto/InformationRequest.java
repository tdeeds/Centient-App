package com.backend.centient.dto;

public class InformationRequest {

    private String user;
    private String age;
    private String income;
    private String location;


    public InformationRequest(String user, String age, String income, String location) {
        this.user = user;
        this.age = age;
        this.income = income;
        this.location = location;
    }

    public InformationRequest() {
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getIncome() {
        return income;
    }

    public void setIncome(String income) {
        this.income = income;
    }
}
