import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfvivevkComponent } from './pdfvivevk.component';

describe('PdfvivevkComponent', () => {
  let component: PdfvivevkComponent;
  let fixture: ComponentFixture<PdfvivevkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfvivevkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfvivevkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
