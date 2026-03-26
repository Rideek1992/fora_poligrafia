import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnaliticPage } from './data-analitic-page';

describe('DataAnaliticPage', () => {
  let component: DataAnaliticPage;
  let fixture: ComponentFixture<DataAnaliticPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAnaliticPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DataAnaliticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
