import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevMemberComponent } from './dev-member.component';

describe('DevMemberComponent', () => {
  let component: DevMemberComponent;
  let fixture: ComponentFixture<DevMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
