import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Book } from 'reviews';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit{
  book:Book=new Book
  errorMessage=""
  addBook(){
    if(this.book.author==null || this.book.category==null || this.book.description==null || this.book.name==null || this.book.price==null
      || this.book.author=="" || this.book.category=="" || this.book.description=="" || this.book.name=="" || this.book.price<0)
    {
      this.errorMessage="all fields must be filled"
      return
    }
    else{
      this.errorMessage=""
    }
    let response=this.service.addBook(this.book)
    response.subscribe()
    this.errorMessage="Book added successfully"
    this.book=new Book
  }

  constructor(public route:Router,public service:AdminService){}
  ngOnInit(): void {
    if(this.service.name=="" || this.service.name==null){
      this.route.navigate(['admin'])
    }
  }
}
