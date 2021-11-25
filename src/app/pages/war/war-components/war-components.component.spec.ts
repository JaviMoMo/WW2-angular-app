import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarComponentsComponent } from './war-components.component';

describe('WarComponentsComponent', () => {
  let component: WarComponentsComponent;
  let fixture: ComponentFixture<WarComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
