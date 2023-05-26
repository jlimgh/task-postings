import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsLayoutComponent } from './layout/posts-layout/posts-layout.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  {
    path: '',
    component: PostsLayoutComponent,
    // canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'post',
        loadChildren: () => 
          import('./modules/posts/posts.module').then(m => m.PostsModule)
      },
    ]
  },
  {
    path: '',
    loadChildren: () => 
      import('./modules/insights/insights.module').then(m => m.InsightsModule)
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
