import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{
  
  home(){
    this.route.navigate([''])
  }

  loginMessage:string
  email:string
  password:string
  errorEmail:string
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  checkLogin(){
    if(this.email==null || this.password==null || this.email=="" || this.password=="" ){
      this.loginMessage="All fields need to be filled *"
      return
    }
    else{
      this.loginMessage=""
    }
    if(this.emailRegex.test(this.email)){
      this.errorEmail=""
    }
    else{
      this.errorEmail="invalid email *"
      return
    }
    if(this.email=="admin@gmail.com"){
      if(this.password=="admin@123"){
        this.service.name="admin"
        this.route.navigate(['dashboard']);
      }
      else{
        this.loginMessage="incorrect password *"
      }
    }
    else{
      this.loginMessage="incorrect email *"
    }
  }
  


  constructor(public service:AdminService,public route:Router){}
  ngOnInit(): void {
    
  }
  
}
