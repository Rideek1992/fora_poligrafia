import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroLanding } from './intro-landing';

describe('IntroLanding', () => {
  let component: IntroLanding;
  let fixture: ComponentFixture<IntroLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroLanding],
    }).compileComponents();

    fixture = TestBed.createComponent(IntroLanding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
