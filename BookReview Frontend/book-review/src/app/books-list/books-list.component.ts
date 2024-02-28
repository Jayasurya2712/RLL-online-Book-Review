import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Book } from 'reviews';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit{
  books:any

  addReview(book:Book){
    this.service.book=book
    this.route.navigate(['addReview'])
  }

  constructor(public route:Router,public service:UserService){}
  ngOnInit(): void {
    if(this.service.email=="" || this.service.email==null){
      this.route.navigate(['user'])
    }
    let response=this.service.getEnabledBooks()
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

  temp:string
  search(){
    if(this.temp=="" || this.temp==null){
      this.ngOnInit()
      return
    }
    let response=this.service.getBookByBookName(this.temp)
    response.subscribe((data:any)=>{
      this.books=data
      if(this.books==""){
        this.availableMessage="-----  no books found  -----"
      }
      else{
        this.availableMessage=""
      }
    })
    this.temp=""
  }

  availableMessage=""
  
  
}
