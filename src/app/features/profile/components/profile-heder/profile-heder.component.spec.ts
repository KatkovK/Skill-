import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHederComponent } from './profile-heder.component';

describe('ProfileHederComponent', () => {
  let component: ProfileHederComponent;
  let fixture: ComponentFixture<ProfileHederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileHederComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileHederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
