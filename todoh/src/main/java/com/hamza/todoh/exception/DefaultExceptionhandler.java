package com.hamza.todoh.exception;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
public class DefaultExceptionhandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiError> handleInternalException(Exception e , HttpServletRequest request){

        ApiError apiError = new ApiError(
                request.getRequestURI(),
                "Internal Server Error",
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                LocalDateTime.now()

        );


        return  new ResponseEntity<>(apiError,HttpStatus.INTERNAL_SERVER_ERROR);

    }
    @ExceptionHandler(TaskNotFoundException.class)
    public ResponseEntity<ApiError> handleTaskNotFoundException(TaskNotFoundException e , HttpServletRequest request){

        ApiError apiError = new ApiError(
                request.getRequestURI(),
                e.getMessage(),
                HttpStatus.NOT_FOUND.value(),
                LocalDateTime.now()

        );

        return  new ResponseEntity<>(apiError,HttpStatus.NOT_FOUND);}


    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ApiError> handleUserNotFoundException(UserNotFoundException e , HttpServletRequest request){

        ApiError apiError = new ApiError(
                request.getRequestURI(),
                e.getMessage(),
                HttpStatus.NOT_FOUND.value(),
                LocalDateTime.now()

        );

        return  new ResponseEntity<>(apiError,HttpStatus.NOT_FOUND);}

    @ExceptionHandler(UnauthorizedAccessException.class)
    public ResponseEntity<ApiError> handleUnauthorizedAccessException(UnauthorizedAccessException e , HttpServletRequest request){

        ApiError apiError = new ApiError(
                request.getRequestURI(),
                e.getMessage(),
                HttpStatus.UNAUTHORIZED.value(),
                LocalDateTime.now()

        );

        return  new ResponseEntity<>(apiError,HttpStatus.UNAUTHORIZED);}
}
