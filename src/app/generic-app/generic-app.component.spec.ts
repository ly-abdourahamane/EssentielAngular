import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericAppComponent } from './generic-app.component';

describe('GenericAppComponent', () => {
  let component: GenericAppComponent;
  let fixture: ComponentFixture<GenericAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
