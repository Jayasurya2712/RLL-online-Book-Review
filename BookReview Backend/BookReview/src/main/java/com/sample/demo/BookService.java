package com.sample.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class BookService {
	
	
	
	@Autowired
	BookRepo bookRepo;
	
	@Autowired
	ReviewRepo reviewRepo;
	
	public boolean addBook(Book book) {
		book.setEnable("enable");
		if(bookRepo.save(book)!=null) {
			return true;
		}
		else { 
			return false;
		}
	}
	
	public List<Book> getAllBooks(){
		return bookRepo.findAll();
	}
	
	public List<Book> getEnabledBooks(){
		return bookRepo.getEnabledBooks(); 
	}
	
	public boolean updateBook(Book book) {
		if(bookRepo.save(book)!=null) {
			return true;
		}
		else {
			return false;
		}
	}
	
	public void deleteReview(String book) {
		reviewRepo.deleteReview(book);
	}
	
	public boolean deleteBook(int id) {
		Optional<Book> book=bookRepo.findById(id);
		try {

			deleteReview(book.get().getName());
			
		}
		catch(Exception e) {
			
			
		} 
		
		try {
			bookRepo.deleteById(id);
		    return true;
		}
		catch(Exception e) {
			return false;
		} 
	}
	
	public List<Book> getBookByName(String book){
		String name="%"+book+"%";
		return bookRepo.getBookByName(name);
	}

}
