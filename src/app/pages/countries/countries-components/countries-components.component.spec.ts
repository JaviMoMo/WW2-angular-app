import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesComponentsComponent } from './countries-components.component';

describe('CountriesComponentsComponent', () => {
  let component: CountriesComponentsComponent;
  let fixture: ComponentFixture<CountriesComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
