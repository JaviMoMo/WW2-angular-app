import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsComponentsComponent } from './results-components.component';

describe('ResultsComponentsComponent', () => {
  let component: ResultsComponentsComponent;
  let fixture: ComponentFixture<ResultsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
