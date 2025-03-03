package com.hamza.todoh.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hamza.todoh.auth.dto.AuthResponse;
import com.hamza.todoh.auth.dto.LoginRequest;
import com.hamza.todoh.auth.dto.RegisterRequest;
import com.hamza.todoh.auth.security.JwtTokenProvider;
import com.hamza.todoh.model.User;
import com.hamza.todoh.repository.UserRepository;

@Service
public class AuthService {
    

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private AuthenticationManager authenticationManager;


    /**
     * Authenticates a user and generates a JWT token for the session.
     * 
     * @param request The login request containing username and password
     * @return AuthResponse containing the generated JWT token and username
     * @throws BadCredentialsException if authentication fails due to invalid credentials
     * @throws AuthenticationException if authentication fails for any other reason
     */
    public AuthResponse login(LoginRequest request) {

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserDetails userDetails =(UserDetails) authentication.getPrincipal();
        String jwt = jwtTokenProvider.generateToken(userDetails);
        return new AuthResponse(jwt, request.getUsername());        

    }

    public AuthResponse register(RegisterRequest   request) {

        System.out.println("register bug2");
        if(userRepository.existsByUsername(request.getUsername())){
            throw new RuntimeException("Username already taken ");
        }

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already taken");
        }

        User user = User.builder()
        .username(request.getUsername())
        .email(request.getEmail())
        .password(passwordEncoder.encode(request.getPassword()))
        .build();

        userRepository.save(user);

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        System.out.println("register bug4");


        UserDetails userDetails =(UserDetails) authentication.getPrincipal();
        String jwt = jwtTokenProvider.generateToken(userDetails);
        System.out.println("register bug5");

        return new AuthResponse(jwt, request.getUsername());

    }






    
    











}
