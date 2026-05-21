package com.surakshit.backend.controller;

import com.surakshit.backend.security.JwtService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")

public class UserController {

    @Autowired
    private JwtService jwtService;

    @GetMapping("/profile")
    public String profile(
            @RequestHeader("Authorization") String authHeader
    ) {

        String token = authHeader.replace("Bearer ", "");

        String email = jwtService.extractEmail(token);

        return "Welcome " + email;
    }
}