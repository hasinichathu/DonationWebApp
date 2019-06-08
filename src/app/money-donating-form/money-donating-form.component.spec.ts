import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyDonatingFormComponent } from './money-donating-form.component';

describe('MoneyDonatingFormComponent', () => {
  let component: MoneyDonatingFormComponent;
  let fixture: ComponentFixture<MoneyDonatingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyDonatingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyDonatingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
