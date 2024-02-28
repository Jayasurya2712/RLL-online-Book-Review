import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { BookStoreHomeComponent } from './book-store-home/book-store-home.component';
import { BookStoreAboutComponent } from './book-store-about/book-store-about.component';
import { BookStoreContactComponent } from './book-store-contact/book-store-contact.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { BooksListComponent } from './books-list/books-list.component';
import { AddReviewComponent } from './add-review/add-review.component';

const routes: Routes = [
  {path:"admin",component:AdminLoginComponent},
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"dashboard",component:AdminDashboardComponent},
  {path:"addBook",component:BookAddComponent},
  {path:"editBook",component:BookEditComponent},
  {path:"user",component:UserLoginComponent},
  {path:"userHeader",component:UserHeaderComponent},
  {path:"bookStoreHome",component:BookStoreHomeComponent},
  {path:"bookStoreAbout",component:BookStoreAboutComponent},
  {path:"bookStoreContact",component:BookStoreContactComponent},
  {path:"userAccount",component:UserAccountComponent},
  {path:"booksList",component:BooksListComponent},
  {path:"addReview",component:AddReviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
