import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsPostsComponent } from './insights-posts.component';

describe('InsightsPostsComponent', () => {
  let component: InsightsPostsComponent;
  let fixture: ComponentFixture<InsightsPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightsPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsightsPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
