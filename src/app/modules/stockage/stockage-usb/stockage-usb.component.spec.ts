import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockageUsbComponent } from './stockage-usb.component';

describe('CleUsbComponent', () => {
  let component: StockageUsbComponent;
  let fixture: ComponentFixture<StockageUsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockageUsbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockageUsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
