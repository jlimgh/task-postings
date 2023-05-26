import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsUsersComponent } from './insights-users.component';

describe('InsightsUsersComponent', () => {
  let component: InsightsUsersComponent;
  let fixture: ComponentFixture<InsightsUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightsUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsightsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
