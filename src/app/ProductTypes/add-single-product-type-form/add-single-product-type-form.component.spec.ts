import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSingleProductTypeFormComponent } from './add-single-product-type-form.component';

describe('AddSingleProductTypeFormComponent', () => {
  let component: AddSingleProductTypeFormComponent;
  let fixture: ComponentFixture<AddSingleProductTypeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSingleProductTypeFormComponent]
    });
    fixture = TestBed.createComponent(AddSingleProductTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
