import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockageHddComponent } from './stockage-hdd.component';

describe('DisqueDurComponent', () => {
  let component: StockageHddComponent;
  let fixture: ComponentFixture<StockageHddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockageHddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockageHddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
