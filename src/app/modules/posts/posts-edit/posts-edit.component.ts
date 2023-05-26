import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../../../shared/models/post';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-posts-edit',
  templateUrl: './posts-edit.component.html',
  styleUrls: ['./posts-edit.component.scss']
})
export class PostsEditComponent implements OnInit {
  post: BehaviorSubject<Post> = new BehaviorSubject({});
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('postId');
    this.postService.getPost(postId !).subscribe((post) => {
      this.post.next(post);
    });
  }

  editPost(post: Post) {
    this.postService.updatePost(this.post.value._id || '', post)
      .subscribe({
        next: () => {
          this.router.navigate(['/post/settings', this.post.value._id]);
        },
        error: (error) => {
          alert('Failed to update post');
          console.error(error);
        }
      })
  }

}
