import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesthumbComponent } from './updatesthumb.component';

describe('UpdatesthumbComponent', () => {
  let component: UpdatesthumbComponent;
  let fixture: ComponentFixture<UpdatesthumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesthumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesthumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
