import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsListDetailComponent } from './posts-list-detail/posts-list-detail.component';
import { PostsAddComponent } from './posts-add/posts-add.component';
import { PostsFormComponent } from './posts-form/posts-form.component';
import { PostsSettingsComponent } from './posts-settings/posts-settings.component';
import { PostsConfirmationPageComponent } from './posts-confirmation-page/posts-confirmation-page.component';

@NgModule({
  declarations: [
    PostsListComponent,
    PostsListDetailComponent,
    PostsAddComponent,
    PostsFormComponent,
    PostsSettingsComponent,
    PostsConfirmationPageComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    PostsRoutingModule,
    ReactiveFormsModule
  ]
})
export class PostsModule { }
