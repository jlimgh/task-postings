import { Component, OnInit } from '@angular/core';
import { LocationOptions } from 'src/app/shared/lists/location';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  countyList = [
    {
      name: 'Los Angeles',
      id: 1,
      routerLink: '/post/location/los-angeles/listings',
      cityId: 'los-angeles',
      sublocations: LocationOptions.la
    },
    {
      name: 'Orange County',
      id: 2,
      routerLink: '/post/location/orange-county/listings',
      cityId: 'orange-county',
      sublocations: LocationOptions.oc
    },
    {
      name: 'Riverside',
      id: 3,
      cityId: 'riversdie',
      routerLink: '/post/location/riverside/listings'
    }
  ];

}
