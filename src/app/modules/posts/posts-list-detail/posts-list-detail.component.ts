import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocationMapStringUrlToStringLabel } from '../../../shared/models/mappings';
import { Post } from '../../../shared/models/post';
import { PostService } from '../../../services/post.service';
@Component({
  selector: 'app-posts-list-detail',
  templateUrl: './posts-list-detail.component.html',
  styleUrls: ['./posts-list-detail.component.scss']
})
export class PostsListDetailComponent implements OnInit {

  postId: string | null;
  post$: Observable<Post> = new Observable();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('postId');
    if (!this.postId) {
      alert('No id provided');
    }

    // use locationID to fetch location data
    this.fetchPost(this.postId !);
  }

  private fetchPost(id: string): void {
    this.post$ = this.postService.getPost(id).pipe(
      map(data => {
        if (LocationMapStringUrlToStringLabel.has(data.location !)) {
          data['locationMapped'] = LocationMapStringUrlToStringLabel.get(data.location !)
        }
        console.log('data: ', data);
        return data;
      })
    )
  }

}
