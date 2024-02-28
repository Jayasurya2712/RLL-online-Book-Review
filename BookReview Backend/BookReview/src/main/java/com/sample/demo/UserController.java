package com.sample.demo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="*")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/addUser")
	public boolean addUser(@RequestBody User user){
		return userService.addUser(user);
		
	}
	
	@GetMapping("/getUser/{email}")
	public Optional<User> getUser(@PathVariable("email") String email) {
		return userService.getUser(email);
	}
	
	
	
	@GetMapping("/validUserLogin/{email}/{password}")
	public boolean validateUser(@PathVariable("email") String email,@PathVariable("password") String pass) {
		return userService.validateUser(email, pass);
	}
	
	@PutMapping("/updateUser")
	public boolean updateUser(@RequestBody User user) {
		return userService.updateUser(user);
	}
	
	
}
