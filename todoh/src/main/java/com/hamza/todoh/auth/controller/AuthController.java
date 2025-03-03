package com.hamza.todoh.auth.controller;


import com.hamza.todoh.auth.dto.AuthResponse;
import com.hamza.todoh.auth.dto.LoginRequest;
import com.hamza.todoh.auth.dto.RegisterRequest;
import com.hamza.todoh.auth.service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private AuthService authService;



    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        System.out.println("register bug ");
        var res= ResponseEntity.ok(authService.register(request));

        System.out.println("register bug 3 ");

        return res;
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }










}
