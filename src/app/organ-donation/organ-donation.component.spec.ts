import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganDonationComponent } from './organ-donation.component';

describe('OrganDonationComponent', () => {
  let component: OrganDonationComponent;
  let fixture: ComponentFixture<OrganDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
