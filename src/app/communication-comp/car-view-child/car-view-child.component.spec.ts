import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarViewChildComponent } from './car-view-child.component';

describe('CarViewChildComponent', () => {
  let component: CarViewChildComponent;
  let fixture: ComponentFixture<CarViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
