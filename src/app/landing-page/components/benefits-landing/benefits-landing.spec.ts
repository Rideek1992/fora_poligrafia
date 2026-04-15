import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsLanding } from './benefits-landing';

describe('BenefitsLanding', () => {
  let component: BenefitsLanding;
  let fixture: ComponentFixture<BenefitsLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenefitsLanding],
    }).compileComponents();

    fixture = TestBed.createComponent(BenefitsLanding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
