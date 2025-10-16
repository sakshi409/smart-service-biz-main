package com.example.servicehub.dto;

public class AuthResponse {
    
    private boolean success;
    private String message;
    private UserData user;
    
    // Inner class for user data
    public static class UserData {
        private Long id;
        private String name;
        private String phone;
        private String email;
        private String location;
        
        public UserData() {
        }
        
        public UserData(Long id, String name, String phone, String email, String location) {
            this.id = id;
            this.name = name;
            this.phone = phone;
            this.email = email;
            this.location = location;
        }
        
        // Getters and Setters
        public Long getId() {
            return id;
        }
        
        public void setId(Long id) {
            this.id = id;
        }
        
        public String getName() {
            return name;
        }
        
        public void setName(String name) {
            this.name = name;
        }
        
        public String getPhone() {
            return phone;
        }
        
        public void setPhone(String phone) {
            this.phone = phone;
        }
        
        public String getEmail() {
            return email;
        }
        
        public void setEmail(String email) {
            this.email = email;
        }
        
        public String getLocation() {
            return location;
        }
        
        public void setLocation(String location) {
            this.location = location;
        }
    }
    
    // Constructors
    public AuthResponse() {
    }
    
    public AuthResponse(boolean success, String message, UserData user) {
        this.success = success;
        this.message = message;
        this.user = user;
    }
    
    // Getters and Setters
    public boolean isSuccess() {
        return success;
    }
    
    public void setSuccess(boolean success) {
        this.success = success;
    }
    
    public String getMessage() {
        return message;
    }
    
    public void setMessage(String message) {
        this.message = message;
    }
    
    public UserData getUser() {
        return user;
    }
    
    public void setUser(UserData user) {
        this.user = user;
    }
}
