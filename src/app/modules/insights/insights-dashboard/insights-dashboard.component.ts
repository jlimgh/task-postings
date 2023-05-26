import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-insights-dashboard',
  templateUrl: './insights-dashboard.component.html',
  styleUrls: ['./insights-dashboard.component.scss'],
})
export class InsightsDashboardComponent implements OnInit {
  patient$: Observable<any>;
  
  constructor() { }

  ngOnInit(): void {
    this.patient$ = of(true);
  }

}
