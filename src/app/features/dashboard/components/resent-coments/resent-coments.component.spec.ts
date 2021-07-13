import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResentComentsComponent } from './resent-coments.component';

describe('ResentComentsComponent', () => {
  let component: ResentComentsComponent;
  let fixture: ComponentFixture<ResentComentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResentComentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResentComentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
