package com.hamza.todoh.auth.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser()
    {
       try{
           Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

           String username = authentication.getName();

           return  ResponseEntity.ok("User Authenticated " +username);

       } catch (Exception e) {
           return ResponseEntity.badRequest().body("User not authenticated " +e.getMessage());
       }



    }



}
