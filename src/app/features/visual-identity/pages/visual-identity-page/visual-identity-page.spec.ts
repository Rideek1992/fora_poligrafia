import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualIdentityPage } from './visual-identity-page';

describe('VisualIdentityPage', () => {
  let component: VisualIdentityPage;
  let fixture: ComponentFixture<VisualIdentityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualIdentityPage],
    }).compileComponents();

    fixture = TestBed.createComponent(VisualIdentityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
