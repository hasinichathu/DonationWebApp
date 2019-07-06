import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgansYouCanDonateComponent } from './organs-you-can-donate.component';

describe('OrgansYouCanDonateComponent', () => {
  let component: OrgansYouCanDonateComponent;
  let fixture: ComponentFixture<OrgansYouCanDonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgansYouCanDonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgansYouCanDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
