package com.backend.centient.dto;

public class AuthenticationResponse {

    private String jwtToken;
    private String username;
    private String password;

    public AuthenticationResponse(String jwtToken, String username, String password) {

        this.jwtToken = jwtToken;
        this.username = username;
        this.password = password;
    }

    public String getJwtToken() {
        return jwtToken;
    }
}
