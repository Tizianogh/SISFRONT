import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelPortableComponent } from './tel-portable.component';

describe('SmartphoneComponent', () => {
  let component: TelPortableComponent;
  let fixture: ComponentFixture<TelPortableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelPortableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelPortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
