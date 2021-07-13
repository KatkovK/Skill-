import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedDefaultViewComponent } from './feed-default-view.component';

describe('FeedDefaultViewComponent', () => {
  let component: FeedDefaultViewComponent;
  let fixture: ComponentFixture<FeedDefaultViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedDefaultViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedDefaultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
