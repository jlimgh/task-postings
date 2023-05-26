import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../../../shared/models/post';
import { LocationMapStringUrlToStringLabel, LocationMapIntToStringLabel, LocationMapUrlStringToInt } from '../../../shared/models/mappings';
import { PostService } from '../../../services/post.service';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  locationId: string | null;
  locationIdMappedInt: number | undefined;
  locationIdMappedLabel: string | undefined;
  posts$: Observable<Post[]> = new Observable();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService) { }

  ngOnInit(): void {
    this.locationId = this.route.snapshot.paramMap.get('locationId');
    this.locationIdMappedInt = LocationMapUrlStringToInt.get(this.locationId !);
    this.locationIdMappedLabel = LocationMapStringUrlToStringLabel.get(this.locationId !);
    // use locationID number to fetch location data
    this.fetchLocationPosts(this.locationIdMappedInt !);
  }
  
  private fetchLocationPosts(locationId: number): void {
    this.posts$ = this.postService.getLocationPosts(locationId !);
  }

  mockPosts = [
    {
      subject: 'Buying watches for cash',
      content: 'blah blah blah',
      location: 'los-angeles',
      createdTS: new Date(),
      routerLink: '/location/los-angeles/1234',
      _id: '1234'
    },
    {
      subject: 'Looking to sell something. Come get it',
      content: 'blah blah blah',
      location: 'orange-county',
      createdTS: new Date(),
      routerLink: '/location/orange-county/5678',
      _id: '2345'
    },
    {
      subject: 'Bike for sale - cheap',
      content: 'blah blah blah',
      location: 'riverside',
      createdTS: new Date(),
      routerLink: '/location/riverside/6789',
      _id:'43887'
    }
  ]

}
