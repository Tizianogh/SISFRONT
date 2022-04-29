import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcHomeComponent } from './pc-home.component';

describe('ComputeurHomeComponent', () => {
  let component: PcHomeComponent;
  let fixture: ComponentFixture<PcHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
