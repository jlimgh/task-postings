import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  citiesList = [
    {
      name: 'Los Angeles',
      id: 1,
      routerLink: '/post/location/los-angeles'
    },
    {
      name: 'Orange County',
      id: 2,
      routerLink: '/post/location/orange-county'
    },
    {
      name: 'Riverside',
      id: 3,
      routerLink: '/post/location/riverside'
    }
  ];

}
