import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'reviews';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  user:User
  editEnable:boolean
  accountEnable:boolean
  errorMessage=""
  errorPassword=""
  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#&])[A-Za-z\d@#&]+$/

  updateAccount(name: string, email: string, password: string){
    if (!name) {
      this.errorMessage = "User name is a required field *";
      return;
    } else {
      this.errorMessage = "";
    }
    if(this.passwordRegex.test(password)){
      this.errorMessage=""
    }
    else{
      this.errorMessage="The password should have at least: One Uppercase, one lowercase, one special character (@,#,&….), and one number."
      return
    }
    this.user.name = name;
    this.user.email = email;
    this.user.password = password;
    let response=this.service.updateAccount(this.user)
    response.subscribe()
    this.editEnable=false
    this.accountEnable=true
  }
  

  editAccount(){
    this.accountEnable=false
    this.editEnable=true
  }

  constructor(private service:UserService,private route:Router){}
  ngOnInit(): void {
    if(this.service.email=="" || this.service.email==null){
      this.route.navigate(['user'])
    }
    this.editEnable=false
    this.accountEnable=true
    let response=this.service.getUser()
    response.subscribe((data:any)=>this.user=data)
  }
  
}
