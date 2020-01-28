import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AItemAddComponent } from './a-item-add.component';

describe('AItemAddComponent', () => {
  let component: AItemAddComponent;
  let fixture: ComponentFixture<AItemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AItemAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
