import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoPaysYouComponent } from './who-pays-you.component';

describe('WhoPaysYouComponent', () => {
  let component: WhoPaysYouComponent;
  let fixture: ComponentFixture<WhoPaysYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoPaysYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoPaysYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
