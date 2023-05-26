import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsMiscComponent } from './insights-misc.component';

describe('InsightsMiscComponent', () => {
  let component: InsightsMiscComponent;
  let fixture: ComponentFixture<InsightsMiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightsMiscComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsightsMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
