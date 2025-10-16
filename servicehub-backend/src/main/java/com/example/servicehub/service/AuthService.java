package com.example.servicehub.service;

import com.example.servicehub.dto.LoginRequest;
import com.example.servicehub.dto.RegisterRequest;
import com.example.servicehub.dto.AuthResponse;
import com.example.servicehub.model.User;
import com.example.servicehub.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {
    
    @Autowired
    private UserRepository userRepository;
    
    // REMOVED: @Autowired private PasswordEncoder passwordEncoder;
    
    public AuthResponse registerUser(RegisterRequest request) {
        // Check if phone already exists
        if (userRepository.existsByPhone(request.getPhone())) {
            return new AuthResponse(false, "Phone number already registered", null);
        }
        
        // Check if email already exists (if provided)
        if (request.getEmail() != null && !request.getEmail().isEmpty()) {
            if (userRepository.existsByEmail(request.getEmail())) {
                return new AuthResponse(false, "Email already registered", null);
            }
        }
        
        // Create new user
        User user = new User();
        user.setName(request.getName());
        user.setPhone(request.getPhone());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword()); // PLAIN TEXT - NOT SECURE!
        
        // Save user to database
        User savedUser = userRepository.save(user);
        
        // Create response with user data
        AuthResponse.UserData userData = new AuthResponse.UserData(
            savedUser.getId(),
            savedUser.getName(),
            savedUser.getPhone(),
            savedUser.getEmail(),
            savedUser.getLocation()
        );
        
        return new AuthResponse(true, "Registration successful", userData);
    }
    
    public AuthResponse loginUser(LoginRequest request) {
        // Find user by phone
        Optional<User> userOptional = userRepository.findByPhone(request.getPhone());
        
        if (userOptional.isEmpty()) {
            return new AuthResponse(false, "Invalid phone number or password", null);
        }
        
        User user = userOptional.get();
        
        // PLAIN TEXT PASSWORD COMPARISON - NOT SECURE!
        if (!request.getPassword().equals(user.getPassword())) {
            return new AuthResponse(false, "Invalid phone number or password", null);
        }
        
        // Create response with user data
        AuthResponse.UserData userData = new AuthResponse.UserData(
            user.getId(),
            user.getName(),
            user.getPhone(),
            user.getEmail(),
            user.getLocation()
        );
        
        return new AuthResponse(true, "Login successful", userData);
    }
}
