package com.sample.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BookRepo extends JpaRepository<Book, Integer>{
	
	@Query("from Book where enable='enable'")
	public List<Book> getEnabledBooks();
	
	@Query("from Book where name like ?1  or author like ?1 or category like ?1")
	public List<Book> getBookByName(String book);
	
}
