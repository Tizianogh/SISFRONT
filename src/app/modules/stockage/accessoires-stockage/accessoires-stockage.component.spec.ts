import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoiresStockageComponent } from './accessoires-stockage.component';

describe('AccessoiresStockageComponent', () => {
  let component: AccessoiresStockageComponent;
  let fixture: ComponentFixture<AccessoiresStockageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoiresStockageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoiresStockageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
