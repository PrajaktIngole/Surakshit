package com.surakshit.backend.controller;

import com.surakshit.backend.dto.LoginRequest;
import com.surakshit.backend.dto.RegisterRequest;
import com.surakshit.backend.model.User;
import com.surakshit.backend.service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")

public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest request) {

        return authService.register(request);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {

        return authService.login(request);
    }
}