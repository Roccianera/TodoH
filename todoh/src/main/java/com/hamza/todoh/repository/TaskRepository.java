package com.hamza.todoh.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hamza.todoh.model.Task;
import com.hamza.todoh.model.User;

public interface TaskRepository  extends JpaRepository<Task,Integer> {


    public List<Task>  findByUser(User user);


}
