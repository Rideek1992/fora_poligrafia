import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProccessLanding } from './proccess-landing';

describe('ProccessLanding', () => {
  let component: ProccessLanding;
  let fixture: ComponentFixture<ProccessLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProccessLanding],
    }).compileComponents();

    fixture = TestBed.createComponent(ProccessLanding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
