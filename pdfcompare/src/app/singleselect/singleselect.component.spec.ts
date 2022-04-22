import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleselectComponent } from './singleselect.component';

describe('SingleselectComponent', () => {
  let component: SingleselectComponent;
  let fixture: ComponentFixture<SingleselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
