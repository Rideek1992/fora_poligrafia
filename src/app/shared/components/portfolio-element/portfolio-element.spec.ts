import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioElement } from './portfolio-element';

describe('PortfolioElement', () => {
  let component: PortfolioElement;
  let fixture: ComponentFixture<PortfolioElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioElement],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
