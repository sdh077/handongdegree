import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AYearComponent } from './a-year.component';

describe('AYearComponent', () => {
  let component: AYearComponent;
  let fixture: ComponentFixture<AYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
