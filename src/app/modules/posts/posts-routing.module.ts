import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsListDetailComponent } from './posts-list-detail/posts-list-detail.component';
import { PostsAddComponent } from './posts-add/posts-add.component';
import { PostsSettingsComponent } from './posts-settings/posts-settings.component';


const postsRoutes: Routes = [
    { path: 'location/:locationId', component: PostsListComponent },
    { path: 'location/:locationId/:postId', component: PostsListDetailComponent },
    { path: 'new', component: PostsAddComponent},
    { path: 'settings/:postId', component: PostsSettingsComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(postsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PostsRoutingModule { }