import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaFormsComponent } from './categoria-forms.component';

describe('CategoriaFormsComponent', () => {
  let component: CategoriaFormsComponent;
  let fixture: ComponentFixture<CategoriaFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriaFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
