import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelHomeComponent } from './tel-home.component';

describe('TelHomeComponent', () => {
  let component: TelHomeComponent;
  let fixture: ComponentFixture<TelHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
