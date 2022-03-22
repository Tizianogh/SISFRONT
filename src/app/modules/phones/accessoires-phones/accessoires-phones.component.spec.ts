import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoiresPhonesComponent } from './accessoires-phones.component';

describe('AccessoiresPhonesComponent', () => {
  let component: AccessoiresPhonesComponent;
  let fixture: ComponentFixture<AccessoiresPhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoiresPhonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoiresPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
