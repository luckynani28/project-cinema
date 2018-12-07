import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerythumbComponent } from './gallerythumb.component';

describe('GallerythumbComponent', () => {
  let component: GallerythumbComponent;
  let fixture: ComponentFixture<GallerythumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerythumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerythumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
