import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsConfirmationPageComponent } from './posts-confirmation-page.component';

describe('PostsConfirmationPageComponent', () => {
  let component: PostsConfirmationPageComponent;
  let fixture: ComponentFixture<PostsConfirmationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsConfirmationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
