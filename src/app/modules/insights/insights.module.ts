import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { InsightsRoutingModule } from './insights-routing.module';
import { InsightsDashboardComponent } from './insights-dashboard/insights-dashboard.component';
import { InsightsUsersComponent } from './insights-users/insights-users.component';
import { InsightsPostsComponent } from './insights-posts/insights-posts.component';
import { InsightsMiscComponent } from './insights-misc/insights-misc.component';



@NgModule({
  declarations: [
    InsightsDashboardComponent,
    InsightsUsersComponent,
    InsightsPostsComponent,
    InsightsMiscComponent
  ],
  imports: [
    CommonModule,
    InsightsRoutingModule,
    MatTabsModule
  ]
})
export class InsightsModule { }
