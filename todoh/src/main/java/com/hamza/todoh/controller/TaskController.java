package com.hamza.todoh.controller;

import org.springframework.http.ResponseEntity;
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

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/tasks")
@CrossOrigin("*")
public class TaskController {
    
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/")
    public ResponseEntity<?> getTasks() {
        return ResponseEntity.ok(taskService.getTasks());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable Integer id) {
        return ResponseEntity.ok(taskService.delete(id));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTask(@PathVariable Integer id) {
        return ResponseEntity.ok(taskService.getTask(id));
    }

    @PostMapping("/")
    public ResponseEntity<?> addTask(@Valid @RequestBody TaskRequestDto taskDto) {
        return ResponseEntity.ok(taskService.addTask(taskDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTask(@PathVariable Integer id, @Valid @RequestBody TaskRequestDto taskDto) {
        return ResponseEntity.ok(taskService.updateTask(id, taskDto));
    }
}
