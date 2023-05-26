import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../shared/models/post';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-posts-settings',
  templateUrl: './posts-settings.component.html',
  styleUrls: ['./posts-settings.component.scss']
})
export class PostsSettingsComponent implements OnInit {

  postId: string | null;
  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('postId');
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

}
