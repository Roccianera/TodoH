package com.hamza.todoh.service;

import java.time.LocalDateTime;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.hamza.todoh.dto.TaskRequestDto;
import com.hamza.todoh.dto.TaskResponseDto;
import com.hamza.todoh.model.Tag;
import com.hamza.todoh.model.Task;

@Service
public class TaskMapperDto {




    public Task mapToTask(TaskRequestDto taskDto) {
  
        var task = new Task();

        task.setTitle(taskDto.title());
        task.setDescription(taskDto.description());
        task.setDeadlineTime(taskDto.deadlineTime());
        task.setCreationTime(LocalDateTime.now());
        return task;
    
    }
    

    public TaskResponseDto mapToTaskResponseDto(Task task) {
     
        
       // Set<String> tags = task.getTags().stream().map(Tag::getName).collect(Collectors.toSet());


      return   new TaskResponseDto(
            task.getId_task(),
            task.getTitle(),
            task.getDescription(),
            task.getDeadlineTime(),
            task.getCreationTime(),
           null
        );


    }
}
