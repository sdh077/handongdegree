import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AItemEditComponent } from './a-item-edit.component';

describe('AItemEditComponent', () => {
  let component: AItemEditComponent;
  let fixture: ComponentFixture<AItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
