import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'reviews';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  home() {
    this.route.navigate([''])
  }

  email: string
  password: string
  userLogin: boolean
  userRegistration: boolean
  loginMessage = ""
  registrationMessage = ""
  userRef: User = new User
  loginStatus: boolean
  regStatus: boolean

  registerEnable() {
    this.loginMessage = ""
    this.userRegistration = true
    this.userLogin = false
    this.email = ""
    this.password = ""
  }
  loginEnable() {
    this.registrationMessage = ""
    this.userRegistration = false
    this.userLogin = true
    this.userRef = new User
  }
  emptyEmail = ""
  emptyPass = ""
  checkLogin() {
    this.loginMessage = ""
    if (this.email == null && this.password == null) {
      this.emptyEmail = "Email is a required field *"
      this.emptyPass = "password is a required field *"
      return
    }
    else {
      this.emptyEmail = ""
      this.emptyPass = ""
    }
    if (this.email == null || this.email == "") {
      this.emptyEmail = "email is a required field *"
      return
    }
    else {
      this.emptyEmail = ""
    }
    if (this.password == null || this.password == "") {
      this.emptyPass = "password is a required field *"
      return
    }
    else {
      this.emptyPass = ""
    }
    this.registrationMessage = ""
    let response = this.service.hasUser(this.email, this.password)
    response.subscribe((data: boolean) => {
      if (data) {
        this.service.email = this.email
        this.loginMessage = "login successful"
        this.route.navigate(['bookStoreHome'])
      }
      else {
        this.loginMessage = "Invalid credentials *"
      }
    })

  }
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#&])[A-Za-z\d@#&]+$/
  errorEmail = ""
  errorPassword = ""

  register() {
    this.loginMessage = ""
    if (this.userRef.email == null || this.userRef.password == null || this.userRef.name == null
      || this.userRef.email == "" || this.userRef.password == "" || this.userRef.name == "") {
      this.registrationMessage = "all fields need to be filled"
      return
    }
    else {
      this.registrationMessage = ""
    }

    if (this.passwordRegex.test(this.userRef.password)) {
      this.errorPassword = ""
    }
    else {
      this.errorPassword = "The password should have at least: One Uppercase, one lowercase, one special character (@,#,&….), and one number."
    }
    if (this.emailRegex.test(this.userRef.email)) {
      this.errorEmail = ""
    }
    else {
      this.errorEmail = "invalid email"
    }
    if (this.errorEmail == "" && this.errorPassword == "") {
      let response = this.service.addUser(this.userRef)
      response.subscribe((data: any) => {
        if (data == "true") {
          this.registrationMessage = ""
          this.userRef = new User
          this.userLogin = true
          this.userRegistration = false
        }
        else {
          this.registrationMessage = "User already exists"
        }
      })
    }
  }

  constructor(private service: UserService, private route: Router) { }
  ngOnInit(): void {
    this.userLogin = true
    this.userRegistration = false
  }


}
