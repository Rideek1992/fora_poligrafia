import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaPage } from './cta-page';

describe('CtaPage', () => {
  let component: CtaPage;
  let fixture: ComponentFixture<CtaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CtaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
