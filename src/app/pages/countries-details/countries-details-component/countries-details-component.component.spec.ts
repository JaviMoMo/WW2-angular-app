import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesDetailsComponentComponent } from './countries-details-component.component';

describe('CountriesDetailsComponentComponent', () => {
  let component: CountriesDetailsComponentComponent;
  let fixture: ComponentFixture<CountriesDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesDetailsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
