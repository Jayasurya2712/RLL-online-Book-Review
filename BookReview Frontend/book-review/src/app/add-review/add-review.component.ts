import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Book, Reviews, User } from 'reviews';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  user: User
  book: Book
  review: Reviews = new Reviews
  errorMessage = ""
  successEnable = false
  reviewEnable = true
  reviews: any

  addReview() {
    if (this.review.rating == null || this.review.review == null || this.review.review == "") {
      this.errorMessage = "all fields need to be filled"
      return
    }
    else {
      this.errorMessage = ""
    }
    if (Number(this.review.rating) > 5 || Number(this.review.rating) < 1) {
      this.errorMessage = "invalid rating"
      return
    }
    else {
      this.errorMessage = ""
    }
    this.review.bname = this.book.name
    this.review.uname = this.user.name
    let response = this.service.addReview(this.review)
    response.subscribe()
    this.successEnable = true
    this.reviewEnable = false
    this.review = new Reviews
  }

  constructor(public route: Router, public service: UserService) { }
  ngOnInit(): void {
    if (this.service.email == "" || this.service.email == null) {
      this.route.navigate(['user'])
    }
    this.book = this.service.book
    let response = this.service.getUser()
    response.subscribe((data: any) => this.user = data)
    let response1 = this.service.getReviewsByBook()
    response1.subscribe((data: any) => {
      this.reviews = data
      if (this.reviews == "") {
        this.availableMessage = "-----  no reviews available for this book -----"
      }
      else {
        this.availableMessage = ""
      }
    })
  }

  availableMessage = ""

}
