import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatePolicyPage } from './private-policy-page';

describe('PrivatePolicyPage', () => {
  let component: PrivatePolicyPage;
  let fixture: ComponentFixture<PrivatePolicyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivatePolicyPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivatePolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
