import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSublocationsListComponent } from './post-sublocations-list.component';

describe('PostSublocationsListComponent', () => {
  let component: PostSublocationsListComponent;
  let fixture: ComponentFixture<PostSublocationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSublocationsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostSublocationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
