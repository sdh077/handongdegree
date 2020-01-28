import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AItemComponent } from './a-item.component';

describe('AItemComponent', () => {
  let component: AItemComponent;
  let fixture: ComponentFixture<AItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
