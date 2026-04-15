import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetLanding } from './target-landing';

describe('TargetLanding', () => {
  let component: TargetLanding;
  let fixture: ComponentFixture<TargetLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetLanding],
    }).compileComponents();

    fixture = TestBed.createComponent(TargetLanding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
