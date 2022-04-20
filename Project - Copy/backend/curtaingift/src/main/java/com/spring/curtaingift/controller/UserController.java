package com.spring.curtaingift.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import  com.spring.curtaingift.model.User;
import  com.spring.curtaingift.services.UserServices;


@RestController
@RequestMapping
@CrossOrigin
public class UserController {
    @Autowired
	private UserServices service;

	@PostMapping("/user/login")
	public Boolean loginUser(@RequestBody User user) throws Exception {
		User tempUser = null ;
		String tempEmail = user.getEmail();
		String tempPass = user.getPassword();
		if(tempEmail != null) {
			tempUser = service.fetchUserByEmail(tempEmail);
			if(tempUser!=null){	
				if((tempUser.getUsertype()!=null) &&(tempUser.getPassword().equals(tempPass) && tempUser.getUsertype().equals("user"))){
					tempUser.setActive(true);
					setActivestate(tempUser);
					return true;
				}
				return false;
			}
		}
		return false;
	}
    @PostMapping("/admin/login")
	public Boolean loginAdmin(@RequestBody User user){
		User tempUser = null ;
		String tempEmail = user.getEmail();
		String tempPass = user.getPassword();
		if(tempEmail != null) {
			tempUser = service.fetchUserByEmail(tempEmail);
			if(tempUser!=null){	
				if((tempUser.getUsertype()!=null) &&(tempUser.getPassword().equals(tempPass) && tempUser.getUsertype().equals("admin"))){
					tempUser.setActive(true);
					setActivestate(tempUser);
					return true;
				}
				return false;
			}
		}
		return false;
	}
    @PostMapping("user/signup")
	public Boolean registeredUser(@RequestBody User user) {
		String tempmail = user.getEmail();
		if(tempmail != null && !"".equals(tempmail)) {
			User userobj = service.fetchUserByEmail(tempmail);
			if(userobj != null) {
				return false;
			}
		}
		User userObj = null;
		userObj = service.saveUser(user);
		if(userObj!=null){
			return true;
		}
		return false;
	}
	@PostMapping("/admin/signup")
	public Boolean registeredAdmin(@RequestBody User user) throws Exception {
		String tempmail = user.getEmail();
		if(tempmail != null && !"".equals(tempmail)) {
			User userobj = service.fetchUserByEmail(tempmail);
			if(userobj != null) {
				throw new Exception("User "+ tempmail +" Already Found, Can't Register");
			}
		}
		User userObj = null;
		userObj = service.saveUser(user);
		if(userObj!=null){
			return true;
		}
		return false;
	}
	@PutMapping
	public void setActivestate(@RequestBody User user){
		if(service.updateData(user)!=null){
			System.out.print("Done");
		}
		else{
			System.out.print("bad");
		}
	}
    @DeleteMapping("/admin/deleteuser")
	public void deleteStudent(@RequestParam int id) {
		service.deleteUser(id);
	}
}
