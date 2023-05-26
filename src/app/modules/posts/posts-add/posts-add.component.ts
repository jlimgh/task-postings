import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../../shared/models/post';
import { PostService } from '../../../services/post.service';
import { LocationMapIntToStringUrl } from '../../../shared/models/mappings';

@Component({
  selector: 'app-posts-add',
  templateUrl: './posts-add.component.html',
  styleUrls: ['./posts-add.component.scss']
})
export class PostsAddComponent implements OnInit {

  constructor(
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit(): void {
  }
  
  addPost(post: Post) {
    this.postService.createPost(post)
      .subscribe({
        next: () => {
          console.log('post body: ', post);
          const mappedLocation = LocationMapIntToStringUrl.get(post.location !);
          this.router.navigate(['/post/location', mappedLocation]);
        },
        error: (error) => {
          alert("Failed to create post");
          console.error(error);
        }
      });
  }

}
