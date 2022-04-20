package com.spring.curtaingift.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.spring.curtaingift.model.User;

public interface UserRepository extends JpaRepository <User, Integer>{

    public User findByEmail(String Email);
	public User findByEmailAndPassword(String Email, String Password);
    public void deleteById(User existingUser);
}