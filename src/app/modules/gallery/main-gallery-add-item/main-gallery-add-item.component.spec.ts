import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGalleryAddItemComponent } from './main-gallery-add-item.component';

describe('MainGalleryAddItemComponent', () => {
  let component: MainGalleryAddItemComponent;
  let fixture: ComponentFixture<MainGalleryAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainGalleryAddItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGalleryAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
