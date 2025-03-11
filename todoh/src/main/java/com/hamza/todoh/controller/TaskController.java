package com.hamza.todoh.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hamza.todoh.dto.TaskRequestDto;
import com.hamza.todoh.service.TaskService;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/v1/tasks")
@CrossOrigin("*")
public class TaskController {


    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }


    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(HttpServletResponse response)
    {
        System.out.println("bug");
       try{
           Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

           String username = authentication.getName();

           return  ResponseEntity.ok("User Authenticated " +username);

       } catch (Exception e) {
           return ResponseEntity.badRequest().body("User not authenticated " +e.getMessage());
       }



    }



   

    @GetMapping("/")
    public ResponseEntity<?> getTasks() {
        try {
            return ResponseEntity.ok(taskService.getTasks());

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error fetching tasks: " + e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable Integer id) {
        try {
            return ResponseEntity.ok(taskService.delete(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error deleting task: " + e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTask(@PathVariable Integer id) {
        try {
            return ResponseEntity.ok(taskService.getTask(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error fetching task: " + e.getMessage());
        }
    }

    @PostMapping("/")
    public ResponseEntity<?> addTask(@RequestBody TaskRequestDto taskDto) {
        try {
            return ResponseEntity.ok(taskService.addTask(taskDto));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error adding task: " + e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTask(@PathVariable Integer id, @RequestBody TaskRequestDto taskDto) {
        try {
            return ResponseEntity.ok(taskService.updateTask(id, taskDto));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error updating task: " + e.getMessage());
        }
    }
    


}
