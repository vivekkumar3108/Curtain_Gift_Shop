package com.spring.curtaingift.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.curtaingift.model.User;
import com.spring.curtaingift.repository.UserRepository;
@Service
public class UserServices {
    @Autowired
	private UserRepository repository;
	
	public User saveUser(User user) {
		return repository.save(user);
	}
	
	public User fetchUserByEmail(String email) {
		return repository.findByEmail(email);
	}
	
	public User fetchUserByEmailAndPassword(String email, String password) {
		return repository.findByEmailAndPassword(email,password);
	}
	
	public void deleteUser(int id) {
		repository.deleteById(id);
	}
	public User updateData(User user) {
		User existingUser = repository.findById(user.getId()).orElse(null);
		existingUser.setUsername(user.getUsername());
		existingUser.setEmail(user.getEmail());
		existingUser.setMobile(user.getMobile());
		existingUser.setPassword(user.getPassword());
		existingUser.setUsertype(user.getUsertype());
		existingUser.setActive(user.getActive());
		return repository.save(existingUser);
    }
}
