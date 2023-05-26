import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListDetailComponent } from './posts-list-detail.component';

describe('PostsListDetailComponent', () => {
  let component: PostsListDetailComponent;
  let fixture: ComponentFixture<PostsListDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsListDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
