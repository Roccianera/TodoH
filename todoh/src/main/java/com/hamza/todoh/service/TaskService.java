package com.hamza.todoh.service;

import java.util.List;
import java.util.Optional;

import com.hamza.todoh.auth.service.CustomUserDetailsService;
import com.hamza.todoh.model.User;
import com.hamza.todoh.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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

    private final UserRepository userRepository;


    

    public TaskResponseDto delete(Integer id) {
        
        var task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String username = authentication.getName();


        if(!task.getUser().getUsername().equals(username)) {
            throw  new RuntimeException("Shit aint yours ");
        }


        taskRepository.delete(task);
        return taskMapperDto.mapToTaskResponseDto(task);
    }



    public TaskResponseDto getTask(Integer id) {
        var task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String username = authentication.getName();


        if(!task.getUser().getUsername().equals(username)) {
            throw  new RuntimeException("Shit aint yours ");
        }



        return taskMapperDto.mapToTaskResponseDto(task);



    }

    public TaskResponseDto addTask(TaskRequestDto dto) {


        var task = taskMapperDto.mapToTask(dto);



        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        var user = userRepository.findByUsername(authentication.getName());
        task.setUser(user.get());

        var savedTask= taskRepository.save(task);
        return taskMapperDto.mapToTaskResponseDto(savedTask); //TODO cambiare la funzione
    }


    public List<TaskResponseDto> getTasks() {



        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String username = authentication.getName();

        Optional<User> user = Optional.ofNullable(userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("User not found ")));



        return taskRepository.findByUser(user.get()).stream().map(taskMapperDto::mapToTaskResponseDto).toList();
    }


    public TaskResponseDto updateTask(Integer id, TaskRequestDto dto) {
        var task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));


        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String username = authentication.getName();

        if(!task.getUser().getUsername().equals(username)){
            throw  new RuntimeException("Aint yours");
        }


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
