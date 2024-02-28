import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit{
  constructor(public service:UserService,public route:Router){}
  ngOnInit(): void {
    if(this.service.email=="" || this.service.email==null){
      this.route.navigate(['user'])
    }
  }
}
