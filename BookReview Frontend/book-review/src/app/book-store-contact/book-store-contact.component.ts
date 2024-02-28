import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-store-contact',
  templateUrl: './book-store-contact.component.html',
  styleUrls: ['./book-store-contact.component.css']
})
export class BookStoreContactComponent implements OnInit{

  constructor(public service:UserService,public route:Router){}
  ngOnInit(): void {
    if(this.service.email=="" || this.service.email==null){
      this.route.navigate(['user'])
    }
  }


}
