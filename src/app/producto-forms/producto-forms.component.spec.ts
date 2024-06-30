import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoFormsComponent } from './producto-forms.component';

describe('ProductoFormsComponent', () => {
  let component: ProductoFormsComponent;
  let fixture: ComponentFixture<ProductoFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductoFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
