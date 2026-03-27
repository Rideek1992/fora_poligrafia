import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopePage } from './scope-page';

describe('ScopePage', () => {
  let component: ScopePage;
  let fixture: ComponentFixture<ScopePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScopePage],
    }).compileComponents();

    fixture = TestBed.createComponent(ScopePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
