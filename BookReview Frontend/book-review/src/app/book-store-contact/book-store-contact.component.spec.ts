import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStoreContactComponent } from './book-store-contact.component';

describe('BookStoreContactComponent', () => {
  let component: BookStoreContactComponent;
  let fixture: ComponentFixture<BookStoreContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookStoreContactComponent]
    });
    fixture = TestBed.createComponent(BookStoreContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
