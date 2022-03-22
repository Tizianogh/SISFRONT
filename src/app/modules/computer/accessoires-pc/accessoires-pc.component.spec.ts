import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoiresPcComponent } from './accessoires-pc.component';

describe('AccessoiresPcComponent', () => {
  let component: AccessoiresPcComponent;
  let fixture: ComponentFixture<AccessoiresPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoiresPcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoiresPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
