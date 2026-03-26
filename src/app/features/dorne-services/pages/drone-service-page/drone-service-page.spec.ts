import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneServicePage } from './drone-service-page';

describe('DroneServicePage', () => {
  let component: DroneServicePage;
  let fixture: ComponentFixture<DroneServicePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DroneServicePage],
    }).compileComponents();

    fixture = TestBed.createComponent(DroneServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
