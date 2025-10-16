package com.example.servicehub.repository;

import com.example.servicehub.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    Optional<User> findByPhone(String phone);
    
    Optional<User> findByEmail(String email);
    
    Boolean existsByPhone(String phone);
    
    Boolean existsByEmail(String email);
}
