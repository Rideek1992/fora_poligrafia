import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDesctop } from './menu-desctop';

describe('MenuDesctop', () => {
  let component: MenuDesctop;
  let fixture: ComponentFixture<MenuDesctop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDesctop],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuDesctop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
