package com.hamza.todoh.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hamza.todoh.model.Task;

public interface TaskRepository  extends JpaRepository<Task,Integer> {

    
}
