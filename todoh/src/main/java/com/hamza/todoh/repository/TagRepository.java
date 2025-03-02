package com.hamza.todoh.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hamza.todoh.model.Tag;

public interface TagRepository  extends JpaRepository<Tag,Integer> {
    
}
