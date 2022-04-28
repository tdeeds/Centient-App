package com.backend.centient.controller;


import com.backend.centient.dto.*;
import com.backend.centient.util.jwtUtil;
import com.backend.centient.model.User;
import com.backend.centient.repository.UserRepository;
import com.backend.centient.security.SecurityUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/api")
public class AuthController {

    @Autowired
    jwtUtil jwtUtil;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserRepository userRepository;

    @Autowired
    SecurityUserDetailsService userDetailsService;

    @Autowired
    AuthenticationManager authenticationManager;


    @RequestMapping("/test")
    public String test() {
        return "Hello World";
    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect User or Pass", e);
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

        final String jwt = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<?> registerUser(@RequestBody SignupRequest signUpRequest) throws Exception {

        if (userRepository.existsByUsername(signUpRequest.getUsername()) || userRepository.existsByEmail(signUpRequest.getEmail())) {
            throw new Exception("User already Exists");
        }

        User user = new User(signUpRequest.getUsername(), signUpRequest.getEmail(), signUpRequest.getPassword());

        userRepository.save(user);

        return ResponseEntity.ok(new SignUpResponse("success"));
    }

    @RequestMapping(value = "/information", method = RequestMethod.POST)
    public ResponseEntity<?> information(@RequestBody InformationRequest informationRequest) {

        Optional<User> user = userRepository.findByUsername(informationRequest.getUser());

        
        userRepository.save(user);

        return ResponseEntity.ok(new SignUpResponse("success"));
    }




    //TODO
    // Add post location, age, and income methods
    // Add initial budget creation method

}





