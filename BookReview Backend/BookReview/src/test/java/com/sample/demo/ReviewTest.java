package com.sample.demo;

import static org.junit.Assert.assertTrue;

import java.util.List;

import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.entity.Reviews;
import com.service.ReviewService;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
public class ReviewTest {

	@Autowired
	private ReviewService reviewService;

	@Test
	public void aAddReviewTest() {
		Reviews review = new Reviews();
		review.setUname("User");
		review.setBname("Harry Porter");
		review.setRating(4);
		review.setReview("good book to read");
		boolean status = reviewService.addReview(review);
		assertTrue(status);
	}

	@Test
	public void bGetReviewsByBook() {
		List<Reviews> reviewsOfBook = reviewService.getReviewsByBook("Harry Porter");
		assertTrue(reviewsOfBook.size() > 0);
	}

	// failed case
	@Test
	public void cGetReviewsByBook() {
		List<Reviews> reviewsOfBook = reviewService.getReviewsByBook("intersteller");
		assertTrue(reviewsOfBook.size() == 0);
	}

}