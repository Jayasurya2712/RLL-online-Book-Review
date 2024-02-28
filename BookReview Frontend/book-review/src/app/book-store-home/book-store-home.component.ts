import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-store-home',
  templateUrl: './book-store-home.component.html',
  styleUrls: ['./book-store-home.component.css']
})
export class BookStoreHomeComponent implements OnInit{
  constructor(public service:UserService,public route:Router){}
  ngOnInit(): void {
    if(this.service.email=="" || this.service.email==null){
      this.route.navigate(['user'])
    }
  }
}
