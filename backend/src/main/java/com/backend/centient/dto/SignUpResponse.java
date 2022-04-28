package com.backend.centient.dto;

public class SignUpResponse {

    private String success;

    public SignUpResponse(String success){
        this.success=success;
    }
    public String getSuccess() {
        return success;
    }

}
