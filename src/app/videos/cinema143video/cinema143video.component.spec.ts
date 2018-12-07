import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cinema143videoComponent } from './cinema143video.component';

describe('Cinema143videoComponent', () => {
  let component: Cinema143videoComponent;
  let fixture: ComponentFixture<Cinema143videoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cinema143videoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cinema143videoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
