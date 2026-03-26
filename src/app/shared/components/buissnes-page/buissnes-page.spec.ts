import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuissnesPage } from './buissnes-page';

describe('BuissnesPage', () => {
  let component: BuissnesPage;
  let fixture: ComponentFixture<BuissnesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuissnesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(BuissnesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
