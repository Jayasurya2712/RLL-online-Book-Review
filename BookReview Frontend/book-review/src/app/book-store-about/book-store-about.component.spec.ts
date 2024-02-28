import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStoreAboutComponent } from './book-store-about.component';

describe('BookStoreAboutComponent', () => {
  let component: BookStoreAboutComponent;
  let fixture: ComponentFixture<BookStoreAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookStoreAboutComponent]
    });
    fixture = TestBed.createComponent(BookStoreAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
