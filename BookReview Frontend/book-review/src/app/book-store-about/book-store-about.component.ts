import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-store-about',
  templateUrl: './book-store-about.component.html',
  styleUrls: ['./book-store-about.component.css']
})
export class BookStoreAboutComponent implements OnInit{
  constructor(public service:UserService,public route:Router){}
  ngOnInit(): void {
    if(this.service.email=="" || this.service.email==null){
      this.route.navigate(['user'])
    }
  }
  
}
