import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesLanding } from './services-landing';

describe('ServicesLanding', () => {
  let component: ServicesLanding;
  let fixture: ComponentFixture<ServicesLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesLanding],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesLanding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
