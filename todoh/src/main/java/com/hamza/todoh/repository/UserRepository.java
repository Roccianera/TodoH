package com.hamza.todoh.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hamza.todoh.model.User;

public interface UserRepository  extends JpaRepository<User,Integer> {

    Optional<User> findByEmail(String email);
    

    Optional<User> findByUsername(String username);


    boolean existsByUsername(String username);


    boolean existsByEmail(String email);
}
