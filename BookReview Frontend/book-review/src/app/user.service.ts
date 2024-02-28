import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, Reviews, User } from 'reviews';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  email:string
  book:Book
  constructor(public http:HttpClient) { }

  public addUser(user:User){
    return this.http.post("http://localhost:8086/addUser",user,{responseType:'text' as 'json'});
  }

  public hasUser(email:string,password:string){
    return this.http.get("http://localhost:8086/validUserLogin/"+email+"/"+password);
  }


  public getUser(){
    return this.http.get("http://localhost:8086/getUser/"+this.email);
  }

  public getEnabledBooks(){
    return this.http.get("http://localhost:8086/getEnabledBooks");
  }

  public addReview(review:Reviews){
    return this.http.post("http://localhost:8086/addReview",review,{responseType:'text' as 'json'});
  }

  public updateAccount(user:User){
    return this.http.put("http://localhost:8086/updateUser",user,{responseType:'text' as 'json'});
  }

  public getReviewByBook(book:string){
    return this.http.get("http://localhost:8086/getReviewByBook/"+book);
  }

  public getBookByBookName(book:string){
    return this.http.get("http://localhost:8086/getBookByBookName/"+book);
  }

  public getReviewsByBook(){
    return this.http.get("http://localhost:8086/getReviewByBook/"+this.book.name);
  }



  
}
