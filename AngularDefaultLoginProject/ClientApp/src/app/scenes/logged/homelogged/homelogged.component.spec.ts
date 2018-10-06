import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeloggedComponent } from './homelogged.component';

describe('HomeloggedComponent', () => {
  let component: HomeloggedComponent;
  let fixture: ComponentFixture<HomeloggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeloggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeloggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
