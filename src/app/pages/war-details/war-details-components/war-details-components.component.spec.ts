import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarDetailsComponentsComponent } from './war-details-components.component';

describe('WarDetailsComponentsComponent', () => {
  let component: WarDetailsComponentsComponent;
  let fixture: ComponentFixture<WarDetailsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarDetailsComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarDetailsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
