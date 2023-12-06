import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { ConfigService } from './config.service';
import { Post } from '../shared/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts$: Subject<Post[]> = new Subject();
  private locationPosts$: Subject<Post[]> = new Subject();
  private subLocationPosts$: Subject<Post[]> = new Subject();
  
  constructor(private httpClient: HttpClient,
              private config: ConfigService) { }
  
  private refreshPosts() {
    this.httpClient.get<Post[]>(`${this.config.BASE_URL}/posts`)
      .subscribe(posts => {
        this.posts$.next(posts);
      });
  }

  private refreshLocationPosts(locationId: any) {
    this.httpClient.get<Post[]>(`${this.config.BASE_URL}/posts/location/${locationId}`)
      .subscribe(posts => {
        this.locationPosts$.next(posts);
      });
  }

  private refreshSubLocationPosts(sublocationId: any) {
    this.httpClient.get<Post[]>(`${this.config.BASE_URL}/posts/sublocation/${sublocationId}`)
      .subscribe(posts => {
        this.subLocationPosts$.next(posts);
      });
  }
  
  getPosts(): Subject<Post[]> {
    this.refreshPosts();
    return this.posts$;
  }

  getLocationPosts(locationId: string): Subject<Post[]> {
    this.refreshLocationPosts(locationId);
    return this.locationPosts$;
  }

  getSubLocationPosts(sublocationId: string): Subject<Post[]> {
    this.refreshSubLocationPosts(sublocationId);
    return this.subLocationPosts$;
  }
  
  getPost(id: string): Observable<Post> {
    return this.httpClient.get<Post>(`${this.config.BASE_URL}/posts/${id}`);
  }
  
  createPost(post: Post): Observable<string> {
    return this.httpClient.post(`${this.config.BASE_URL}/posts`, post, { responseType: 'text' });
  }
  
  updatePost(id: string, post: Post): Observable<string> {
    return this.httpClient.put(`${this.config.BASE_URL}/posts/${id}`, post, { responseType: 'text' });
  }
  
  deletePost(id: string): Observable<string> {
    return this.httpClient.delete(`${this.config.BASE_URL}/posts/${id}`, { responseType: 'text' });
  }
}
