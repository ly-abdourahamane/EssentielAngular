import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationCompComponent } from './communication-comp.component';

describe('CommunicationCompComponent', () => {
  let component: CommunicationCompComponent;
  let fixture: ComponentFixture<CommunicationCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
