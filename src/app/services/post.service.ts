import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postUrl, post, httpOptions);
  }

  updatePost(post: Post): Observable<Post> {
    const url = `${this.postUrl}/${post.id}`;
    return this.http.put<Post>(url, post, httpOptions);
  }
}
