import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMeetingPageComponent } from './my-meeting-page.component';

describe('MyMeetingPageComponent', () => {
  let component: MyMeetingPageComponent;
  let fixture: ComponentFixture<MyMeetingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMeetingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMeetingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
