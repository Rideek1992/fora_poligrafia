import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebServicePage } from './web-service-page';

describe('WebServicePage', () => {
  let component: WebServicePage;
  let fixture: ComponentFixture<WebServicePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebServicePage],
    }).compileComponents();

    fixture = TestBed.createComponent(WebServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
