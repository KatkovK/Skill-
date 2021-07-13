import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsUsedComponent } from './tags-used.component';

describe('TagsUsedComponent', () => {
  let component: TagsUsedComponent;
  let fixture: ComponentFixture<TagsUsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsUsedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
