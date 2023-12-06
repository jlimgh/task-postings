import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostSublocationsListComponent } from './post-sublocations-list/post-sublocations-list.component';
import { PostsListDetailComponent } from './posts-list-detail/posts-list-detail.component';
import { PostsAddComponent } from './posts-add/posts-add.component';
import { PostsEditComponent } from './posts-edit/posts-edit.component';
import { PostsSettingsComponent } from './posts-settings/posts-settings.component';
import { PostsConfirmationPageComponent } from './posts-confirmation-page/posts-confirmation-page.component';


const postsRoutes: Routes = [
    { 
        path: 'location/:locationId/listings',
        component: PostsListComponent,
    },
    { 
        path: 'location/:locationId/:sublocationId/listings',
        component: PostSublocationsListComponent,
    },
    {
        path: 'location/:locationId/:sublocationId/:postId',
        component: PostsListDetailComponent
    },
    // { path: 'location/:locationId/:postId', component: PostsListDetailComponent },
    { path: 'new', component: PostsAddComponent},
    { path: 'edit/:postId', component: PostsEditComponent},
    { path: 'settings/:postId', component: PostsSettingsComponent },
    { path: 'confirmation-page/:postId', component: PostsConfirmationPageComponent}
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