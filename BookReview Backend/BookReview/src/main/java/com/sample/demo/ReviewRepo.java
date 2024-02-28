package com.sample.demo;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface ReviewRepo extends JpaRepository<Reviews, Integer>{
	@Query("from Reviews where bname=?1")
	public List<Reviews> getReviewsByBook(String book);
	
	String query1="delete from Reviews r where r.bname=:book";
	@Transactional 
	@Modifying
	@Query(query1)
	public void deleteReview(String book);
}
 