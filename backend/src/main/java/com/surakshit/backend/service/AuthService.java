package com.surakshit.backend.service;

import com.surakshit.backend.dto.LoginRequest;
import com.surakshit.backend.dto.RegisterRequest;
import com.surakshit.backend.model.User;
import com.surakshit.backend.repository.UserRepository;
import com.surakshit.backend.security.JwtService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    public User register(RegisterRequest request) {

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        return userRepository.save(user);
    }

    public String login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        boolean isPasswordCorrect =
                passwordEncoder.matches(request.getPassword(), user.getPassword());

        if (!isPasswordCorrect) {
            throw new RuntimeException("Invalid password");
        }

        return jwtService.generateToken(user.getEmail());
    }
}