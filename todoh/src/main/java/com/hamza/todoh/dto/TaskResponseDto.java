package com.hamza.todoh.dto;

import java.time.LocalDateTime;
import java.util.Set;

public record TaskResponseDto(
    Integer id_task,
    String title,
    String description,
    LocalDateTime deadlineTime,
    LocalDateTime creationTime,
    Set<String> tags
) {

}