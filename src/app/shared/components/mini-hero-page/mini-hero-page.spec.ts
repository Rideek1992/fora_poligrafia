import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniHeroPage } from './mini-hero-page';

describe('MiniHeroPage', () => {
  let component: MiniHeroPage;
  let fixture: ComponentFixture<MiniHeroPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniHeroPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MiniHeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
