import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatySettings } from './privaty-settings';

describe('PrivatySettings', () => {
  let component: PrivatySettings;
  let fixture: ComponentFixture<PrivatySettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivatySettings],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivatySettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
