import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Book, Reviews } from 'reviews';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  books:any
  reviews:any
  bookRef:Book=new Book
  bookListEnable:boolean=true
  editEnable=false
  logout(){
    this.route.navigate([''])
  }
  addNewBook(){
    this.route.navigate(['addBook'])
  }
  editBook(book:Book){
    this.service.bookRef=book
    this.route.navigate(['editBook'])
  }
   

  deleteBook(id:number){
    let response=this.service.deleteBook(id)
    response.subscribe()
    this.ngOnInit()
  }

  reviewsEnable=false
  name:string
  viewBookReviews(name:string){
    this.name=name
    let response=this.service.getReviewsByBook(name)
    response.subscribe((data:any)=>{
    this.reviews=data
    if(this.reviews==""){
      this.availableReviewsMessage="-----  no reviews available for this book  -----"
    }
    else{
      this.availableReviewsMessage=""
    }

  })
    this.bookListEnable=false
    this.reviewsEnable=true
  }

  gotoBookList(){
    this.bookListEnable=true
    this.reviewsEnable=false
  }

  constructor(public route:Router,public service:AdminService){}
  ngOnInit(): void {
    if(this.service.name=="" || this.service.name==null){
      this.route.navigate(['admin'])
    }
    let response=this.service.getBooks()
    response.subscribe((data:any)=>{
      this.books=data
      if(this.books==""){
        this.availableMessage="-----  no books available  -----"
      }
      else{
        this.availableMessage=""
      }
    })
  }

  availableMessage=""
  availableReviewsMessage=""
  
}
