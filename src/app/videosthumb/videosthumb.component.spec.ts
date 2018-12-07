import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosthumbComponent } from './videosthumb.component';

describe('VideosthumbComponent', () => {
  let component: VideosthumbComponent;
  let fixture: ComponentFixture<VideosthumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosthumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosthumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
