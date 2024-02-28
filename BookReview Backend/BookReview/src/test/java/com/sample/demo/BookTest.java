package com.sample.demo;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.util.List;

import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class BookTest {
	@Autowired
	BookService bookService;

	//adding new book
	@Test
	public void aAddBookTest() {
		Book book=new Book();
		book.setName("Harry Porter");
		book.setAuthor("J.K.Rowling");
		book.setDescription("Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling");
		book.setPrice(500);
		book.setCategory("Novel");
		boolean isAdded = bookService.addBook(book);
		assertTrue(isAdded);
	}
	
	@Test
	public void bAddBookTest() {
		Book book=new Book();
		book.setName("IIT BOOk");
		book.setAuthor("Sharma");
		book.setDescription("To enter into IIT");
		book.setPrice(700);
		book.setCategory("Studies");
		boolean isAdded = bookService.addBook(book);
		assertTrue(isAdded);
	}
	//retrieving all books
	@Test
	public void cGetBookTest() {
		List<Book> books = bookService.getAllBooks();
		assertNotNull(books);
	}
	
	
	//update book
	@Test 
	public void dUpdateBookTest() {
		Book book=new Book();
		List<Book> books = bookService.getAllBooks();
		book.setId(books.get(0).getId());
		book.setName("Harry Porter");
		book.setAuthor("JK Rowling");
		book.setDescription("Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling");
		book.setPrice(100);
		book.setCategory("Novel");
		book.setEnable("enable");
		boolean isUpdated = bookService.updateBook(book);
		assertTrue(isUpdated);
	}
	
	//get all enabled books
		@Test
		public void eGetEnabledBooks() {
			List<Book> book = bookService.getEnabledBooks();
			assertNotNull(book);
		}
	
	//retrieving book by name
	@Test
	public void fGetBookByNameTest() { 
		List<Book> book=bookService.getBookByName("Harry porter");
		assertNotNull(book);
	}
	
	//delete book by id
	@Test
	public void gDeleteBookTest() {
		List<Book> books = bookService.getAllBooks();
		boolean isDeleted = bookService.deleteBook(books.get(0).getId());
		assertTrue(isDeleted);
	}
	
	//---------failed cases ------------------
	@Test
	public void hDeleteBookTest() {
		boolean isDeleted = bookService.deleteBook(10000);
		assertFalse(isDeleted);
	}
	

}
