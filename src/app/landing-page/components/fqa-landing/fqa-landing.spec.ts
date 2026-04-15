import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FqaLanding } from './fqa-landing';

describe('FqaLanding', () => {
  let component: FqaLanding;
  let fixture: ComponentFixture<FqaLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FqaLanding],
    }).compileComponents();

    fixture = TestBed.createComponent(FqaLanding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
