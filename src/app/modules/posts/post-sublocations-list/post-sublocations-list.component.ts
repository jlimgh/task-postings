import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../../../shared/models/post';
import { LocationMapStringUrlToStringLabel, SubLocationMapStringUrlToStringLabel } from '../../../shared/models/mappings';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-post-sublocations-list',
  templateUrl: './post-sublocations-list.component.html',
  styleUrls: ['./post-sublocations-list.component.scss']
})
export class PostSublocationsListComponent {
  locationId: string | null;
  locationIdMappedLabel: string | undefined;
  sublocationId: string | null;
  sublocationIdMappedLabel: string | undefined;
  posts$: Observable<Post[]> = new Observable();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService) { }

  ngOnInit(): void {
    this.locationId = this.route.snapshot.paramMap.get('locationId');
    this.locationIdMappedLabel = LocationMapStringUrlToStringLabel.get(this.locationId !);
    this.sublocationId = this.route.snapshot.paramMap.get('sublocationId');
    this.sublocationIdMappedLabel = SubLocationMapStringUrlToStringLabel.get(this.sublocationId !);

    // console.log('locationId: ', this.locationId);
    console.log('sublocationId: ', this.sublocationId);
    console.log('snapshot paramMap: ', this.route.snapshot.paramMap);
    // use locationID number to fetch location data
    this.fetchSubLocationPosts(this.sublocationId !);
  }
  
  private fetchSubLocationPosts(sublocationId: string): void {
    this.posts$ = this.postService.getSubLocationPosts(sublocationId !);
  }
}
