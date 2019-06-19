import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonationStoriesComponent } from './blood-donation-stories.component';

describe('BloodDonationStoriesComponent', () => {
  let component: BloodDonationStoriesComponent;
  let fixture: ComponentFixture<BloodDonationStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodDonationStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodDonationStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
