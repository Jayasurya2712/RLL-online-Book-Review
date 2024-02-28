import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';
import { AdminService } from './admin.service';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserService } from './user.service';
import { UserHeaderComponent } from './user-header/user-header.component';
import { BookStoreHomeComponent } from './book-store-home/book-store-home.component';
import { BookStoreAboutComponent } from './book-store-about/book-store-about.component';
import { BookStoreContactComponent } from './book-store-contact/book-store-contact.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { BooksListComponent } from './books-list/books-list.component';
import { AddReviewComponent } from './add-review/add-review.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    BookAddComponent,
    BookEditComponent,
    UserLoginComponent,
    UserHeaderComponent,
    BookStoreHomeComponent,
    BookStoreAboutComponent,
    BookStoreContactComponent,
    UserAccountComponent,
    BooksListComponent,
    AddReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AdminService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
