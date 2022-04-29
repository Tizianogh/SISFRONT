import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelAccessoireComponent } from './tel-accessoire.component';

describe('AccessoiresPhonesComponent', () => {
  let component: TelAccessoireComponent;
  let fixture: ComponentFixture<TelAccessoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelAccessoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelAccessoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
