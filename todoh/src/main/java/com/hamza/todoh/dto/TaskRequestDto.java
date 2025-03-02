package com.hamza.todoh.dto;

import java.time.LocalDateTime;
import java.util.Set;

public record TaskRequestDto(
    String title,
    String description,
    LocalDateTime deadlineTime,
    Set<String> tags
) {

}
