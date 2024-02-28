import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStoreHomeComponent } from './book-store-home.component';

describe('BookStoreHomeComponent', () => {
  let component: BookStoreHomeComponent;
  let fixture: ComponentFixture<BookStoreHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookStoreHomeComponent]
    });
    fixture = TestBed.createComponent(BookStoreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
