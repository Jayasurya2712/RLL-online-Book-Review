package com.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Book;
import com.service.BookService;

@RestController
@CrossOrigin(origins = "*")
public class BookController {

	@Autowired
	BookService bookService;

	@PostMapping("/addBook")
	public boolean addBook(@RequestBody Book book) {
		book.setEnable("enable");
		return bookService.addBook(book);
	}

	@GetMapping("/getAllBooks")
	public List<Book> getAllBooks() {
		return bookService.getAllBooks();
	}

	@GetMapping("/getEnabledBooks")
	public List<Book> getEnabledBooks() {
		return bookService.getEnabledBooks();
	}

	@PutMapping("/updateBook")
	public boolean updateBook(@RequestBody Book book) {
		return bookService.updateBook(book);
	}

	@GetMapping("/getBookByBookName/{bookName}")
	public List<Book> getBookByBookName(@PathVariable("bookName") String book) {
		return bookService.getBookByName(book);
	}

	@DeleteMapping("/deleteBook/{id}")
	public String deleteBook(@PathVariable("id") int id) {
		if (bookService.deleteBook(id)) {
			return "book with id " + id + " is deleted successfully";
		}
		return "book not found";
	}

}
