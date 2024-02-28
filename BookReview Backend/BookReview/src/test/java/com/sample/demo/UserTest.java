package com.sample.demo;

import static org.junit.Assert.*;

import java.util.Optional;

import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
public class UserTest {

    @Autowired
    private UserService userSevice;
	
    
    //successful addition
	@Test
	public void aAddUserTest() {
		User user=new User();
		user.setEmail("patil@gmail.com");
		user.setName("Patil");
		user.setPassword("Patil@123");
		boolean isAdded=userSevice.addUser(user);
		assertTrue(isAdded);
	}
	
	
	//failed addition
	@Test
	public void bAddUserTest() {
		User user=new User();
		user.setEmail("patil@gmail.com");
		user.setName("Patil");
		user.setPassword("Patil@123");
		boolean isAdded=userSevice.addUser(user);
		assertFalse(isAdded);
	}
	
	
	
	@Test
	public void cUpdateUserTest() {
		User user=new User();
		user.setEmail("patil@gmail.com");
		user.setName("Patil");
		user.setPassword("Patil@1234");
		boolean isAdded=userSevice.updateUser(user);
		assertTrue(isAdded);
	}
	
	//successful search
	@Test
	public void dGetUserByEmailTest() {
		Optional<User> user=userSevice.getUser("patil@gmail.com");
		assertNotNull(user);
	}
	
	//failed search
	@Test
	public void eGetUserByEmailTest() {
		Optional<User> user=userSevice.getUser("patilmoro@gmail.com");
		assertTrue(user.isEmpty());
	}
	
	//successful login
	@Test
	public void fValidUserLoginTest() {
		boolean isAuthenticated=userSevice.validateUser("patil@gmail.com", "Patil@1234");
		assertTrue(isAuthenticated);
	}
	
	//failed login
	@Test
	public void gValidUserLoginTest() {
		boolean isAuthenticated=userSevice.validateUser("patil@gmail.com", "Patil@123");
		assertFalse(isAuthenticated);
	}
	
	//successful delete
		@Test
		public void hDeleteUserByEmail() {
			boolean isDeleted=userSevice.deleteUser("patil@gmail.com");
			assertTrue(isDeleted);
		}
		
		//failed delete
		@Test
		public void iDeleteUserByEmail() {
			boolean isDeleted=userSevice.deleteUser("patil@gmail.com");
			assertFalse(isDeleted);
		}



	}
	
	




