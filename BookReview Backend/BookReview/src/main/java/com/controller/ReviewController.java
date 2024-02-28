package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Reviews;
import com.service.ReviewService;

@RestController
@CrossOrigin(origins = "*")
public class ReviewController {
	@Autowired
	ReviewService reviewService;

	@PostMapping("/addReview")
	public boolean addReview(@RequestBody Reviews review) {
		return reviewService.addReview(review);
	}

	@GetMapping("/getReviewByBook/{bookName}")
	public List<Reviews> getReviewByBook(@PathVariable("bookName") String bookName) {
		return reviewService.getReviewsByBook(bookName);
	}
}
