import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyStoryComponent } from './happy-story.component';

describe('HappyStoryComponent', () => {
  let component: HappyStoryComponent;
  let fixture: ComponentFixture<HappyStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappyStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
