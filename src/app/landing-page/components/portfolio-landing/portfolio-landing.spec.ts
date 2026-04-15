import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioLanding } from './portfolio-landing';

describe('PortfolioLanding', () => {
  let component: PortfolioLanding;
  let fixture: ComponentFixture<PortfolioLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioLanding],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioLanding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
