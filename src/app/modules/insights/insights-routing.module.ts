import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsightsDashboardComponent } from './insights-dashboard/insights-dashboard.component';
import { InsightsUsersComponent } from './insights-users/insights-users.component';
import { InsightsPostsComponent } from './insights-posts/insights-posts.component';
import { InsightsMiscComponent } from './insights-misc/insights-misc.component';


const insightsRoutes: Routes = [
    { 
        path: 'insights', 
        component: InsightsDashboardComponent,
        children: [
            {
                path: 'users',
                component: InsightsUsersComponent
            },
            {
                path: 'posts',
                component: InsightsPostsComponent
            },
            {
                path: 'misc',
                component: InsightsMiscComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(insightsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class InsightsRoutingModule { }