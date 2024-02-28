package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Reviews;
import com.repo.ReviewRepo;

@Service
public class ReviewService {
	@Autowired
	ReviewRepo reviewRepo;

	public boolean addReview(Reviews review) {
		if (reviewRepo.save(review) != null) {
			return true;
		} else {
			return false;
		}
	}

	public List<Reviews> getReviewsByBook(String bookName) {
		return reviewRepo.getReviewsByBook(bookName);
	}

}
