package com.hamza.todoh.exception;

import java.time.LocalDateTime;

public record ApiError(

        String path,
        String message,
        int StatusCode,
        LocalDateTime localDateTime

) {

}
