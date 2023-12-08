import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../../shared/models/post';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-posts-settings',
  templateUrl: './posts-settings.component.html',
  styleUrls: ['./posts-settings.component.scss']
})
export class PostsSettingsComponent implements OnInit {

  postId: string | null;
  post$: Observable<Post> = new Observable();

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('postId');
    this.fetchPost(this.postId !);
  }

  deletePost(id: string): void {
    this.postService.deletePost(id).subscribe({
      next: (res: any) => console.log('post is deleted: ', res),
      error: (error) => {
        alert("Failed to create post");
        console.error(error);
      }
    });
  }

  togglePostPresence(id: string, presence: boolean) {
    this.postService.updatePostToBeLive(id, {isLive: presence})
      .subscribe({
        next: (res) => {
          console.error(res);
          this.fetchPost(this.postId !);
        },
        error: (error) => {
          alert('Failed to update post presence');
          console.error(error);
        }
      })
  }

  private fetchPost(id: string): void {
    this.post$ = this.postService.getPost(id);
  }

}
