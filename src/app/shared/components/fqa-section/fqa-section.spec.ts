import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FqaSection } from './fqa-section';

describe('FqaSection', () => {
  let component: FqaSection;
  let fixture: ComponentFixture<FqaSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FqaSection],
    }).compileComponents();

    fixture = TestBed.createComponent(FqaSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
