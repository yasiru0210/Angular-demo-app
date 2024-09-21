import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRegisterationComponent } from './product-registeration.component';

describe('ProductRegisterationComponent', () => {
  let component: ProductRegisterationComponent;
  let fixture: ComponentFixture<ProductRegisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRegisterationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
