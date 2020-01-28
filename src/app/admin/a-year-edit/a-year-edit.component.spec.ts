import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AYearEditComponent } from './a-year-edit.component';

describe('AYearEditComponent', () => {
  let component: AYearEditComponent;
  let fixture: ComponentFixture<AYearEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AYearEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AYearEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
