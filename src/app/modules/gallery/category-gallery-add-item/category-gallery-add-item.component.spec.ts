import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryGalleryAddItemComponent } from './category-gallery-add-item.component';

describe('CategoryGalleryAddItemComponent', () => {
  let component: CategoryGalleryAddItemComponent;
  let fixture: ComponentFixture<CategoryGalleryAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryGalleryAddItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryGalleryAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
