package com.sample.demo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	UserRepo userRepo;

	public boolean addUser(User user) {
		int c = userRepo.hasUser(user.getEmail());
		if (c > 0) {
			return false;
		} else {
			userRepo.save(user);
			return true;
		}

	}

	public boolean validateUser(String email, String pass) {
		if (userRepo.validLogin(email, pass) != null) {
			return true;
		}
		return false;
	}

	public Optional<User> getUser(String email) {
		return userRepo.findById(email);
	}

	public boolean updateUser(User user) {
		if (userRepo.save(user) != null) {
			return true;
		} else {
			return false;
		}
	}

	public boolean deleteUser(String email) {
		try {
			userRepo.deleteById(email);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
