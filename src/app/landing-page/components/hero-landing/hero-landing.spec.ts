import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLanding } from './hero-landing';

describe('HeroLanding', () => {
  let component: HeroLanding;
  let fixture: ComponentFixture<HeroLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroLanding],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroLanding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
