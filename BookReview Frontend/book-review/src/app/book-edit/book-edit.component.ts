import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { Book } from 'reviews';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit{
  bookRef:Book
  errorMessage=""
  updateBook(){
    if(this.bookRef.author==null || this.bookRef.category==null || this.bookRef.description==null || this.bookRef.name==null || this.bookRef.price==null || this.bookRef.enable==null
      || this.bookRef.author=="" || this.bookRef.category=="" || this.bookRef.description=="" || this.bookRef.name=="" || this.bookRef.enable=="" || this.bookRef.price<0)
    {
      this.errorMessage="all fields must be filled"
      return
    }
    else{
      this.errorMessage=""
    }
    let response=this.service.updateBook(this.bookRef)
    response.subscribe()
    this.errorMessage="Book updated successfully"
  }
  constructor(public service:AdminService,public route:Router){}
  ngOnInit(): void {
    
    if(this.service.name=="" || this.service.name==null){
      this.route.navigate(['admin'])
    }
    this.bookRef=this.service.bookRef
  }

}
