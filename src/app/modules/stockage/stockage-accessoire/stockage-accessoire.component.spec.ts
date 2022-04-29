import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockageAccessoireComponent } from './stockage-accessoire.component';

describe('AccessoiresStockageComponent', () => {
  let component: StockageAccessoireComponent;
  let fixture: ComponentFixture<StockageAccessoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockageAccessoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockageAccessoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
