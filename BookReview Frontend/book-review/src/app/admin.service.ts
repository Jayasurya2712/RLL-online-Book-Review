import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from 'reviews';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  name:string
  bookRef:Book

  public getBooks(){
    return this.http.get("http://localhost:8086/getAllBooks");
  }

  public addBook(book:Book){
    return this.http.post("http://localhost:8086/addBook",book,{responseType:'text' as 'json'});
  }

  public deleteBook(id:any){
    return this.http.delete("http://localhost:8086/deleteBook/"+id);
  }

  public updateBook(book:Book){
    return this.http.put("http://localhost:8086/updateBook",book,{responseType:'text' as 'json'});
  }

  public getReviewsByBook(name:string){
    return this.http.get("http://localhost:8086/getReviewByBook/"+name);
  }

  

}
