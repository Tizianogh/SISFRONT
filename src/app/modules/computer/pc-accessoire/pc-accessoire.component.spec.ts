import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcAccessoireComponent } from './pc-accessoire.component';

describe('AccessoiresPcComponent', () => {
  let component: PcAccessoireComponent;
  let fixture: ComponentFixture<PcAccessoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcAccessoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcAccessoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
