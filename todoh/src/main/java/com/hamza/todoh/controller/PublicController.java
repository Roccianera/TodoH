package com.hamza.todoh.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hamza.todoh.dto.TaskResponseDto;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/public")  
@CrossOrigin("*")
public class PublicController {




    @GetMapping("/task/response")
    public ResponseEntity<?> taskResponse() {

        TaskResponseDto task = new TaskResponseDto(1, "title", "description", null, null);
       
        return ResponseEntity.ok(task);
    }

    
    



}
