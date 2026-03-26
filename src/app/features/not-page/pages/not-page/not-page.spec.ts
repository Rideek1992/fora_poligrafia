import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotPage } from './not-page';

describe('NotPage', () => {
  let component: NotPage;
  let fixture: ComponentFixture<NotPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotPage],
    }).compileComponents();

    fixture = TestBed.createComponent(NotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
