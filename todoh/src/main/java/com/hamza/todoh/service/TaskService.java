package com.hamza.todoh.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hamza.todoh.dto.TaskRequestDto;
import com.hamza.todoh.dto.TaskResponseDto;
import com.hamza.todoh.repository.TagRepository;
import com.hamza.todoh.repository.TaskRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TaskService {


    private final TaskRepository taskRepository;

    private final TagRepository tagRepository;

    private final TaskMapperDto taskMapperDto;

    

    public TaskResponseDto delete(Integer id) {
        
        var task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
        taskRepository.delete(task);
        return taskMapperDto.mapToTaskResponseDto(task);
    }



    public TaskResponseDto getTask(Integer id) {
        var task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
        return taskMapperDto.mapToTaskResponseDto(task);
    }

    public TaskResponseDto addTask(TaskRequestDto dto) {
        var task = taskRepository.save(taskMapperDto.mapToTask(dto));
        return taskMapperDto.mapToTaskResponseDto(task);
    }


    public List<TaskResponseDto> getTasks() {
        return taskRepository.findAll().stream().map(taskMapperDto::mapToTaskResponseDto).toList();
    }


    public TaskResponseDto updateTask(Integer id, TaskRequestDto dto) {
        var task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));

        if(dto.title() != null){
            task.setTitle(dto.title());
        }
        if(dto.description() != null){
            task.setDescription(dto.description());
        }
        if(dto.deadlineTime() != null){
            task.setDeadlineTime(dto.deadlineTime());
        }

        //TODO: Add tags
    

        var savetask = taskRepository.save(task);


        return taskMapperDto.mapToTaskResponseDto(savetask);
    }




    

    
}
