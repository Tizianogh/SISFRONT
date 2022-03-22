import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcFixeComponent } from './pc-fixe.component';

describe('PcFixeComponent', () => {
  let component: PcFixeComponent;
  let fixture: ComponentFixture<PcFixeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcFixeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcFixeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
