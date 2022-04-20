package com.spring.curtaingift.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="User")
public class User {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String email;
	private String username;
	private String mobile;
	private String password;
	private String repassword;
	private String usertype;
	private Boolean active;



	
	public User(){
		
	}
	
	public User(int id, String email ,String username, String mobile, String password, String repassword,String usertype, Boolean active) {
		super();
		this.id = id;
		this.email = email;
		this.username = username;
		this.mobile = mobile;
		this.password = password;
		this.repassword = repassword;
		this.usertype = usertype;
		this.active = active;
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getMobile() {
		return this.mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRepassword() {
		return this.repassword;
	}

	public void setRepassword(String repassword) {
		this.repassword = repassword;
	}

	public String getUsertype() {
		return this.usertype;
	}

	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}

	public Boolean getActive() {
		return this.active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

}
