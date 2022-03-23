import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportGroupComponent } from './passport-group.component';

describe('PassportGroupComponent', () => {
  let component: PassportGroupComponent;
  let fixture: ComponentFixture<PassportGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassportGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
