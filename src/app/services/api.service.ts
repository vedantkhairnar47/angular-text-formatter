
 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  /* ===== COMMENTS ===== */
  getComments(userId?: string): Observable<any> {
    let url = `${this.baseUrl}/comments`;
    if (userId) {
      url += `?postId=${userId}`;
    }
    return this.http.get(url);
  }

  /* ===== ALBUMS ===== */
  getAlbums(userId?: string): Observable<any> {
    let url = `${this.baseUrl}/albums`;
    if (userId) {
      url += `?userId=${userId}`;
    }
    return this.http.get(url);
  }

  /* ===== PHOTOS ===== */
  getPhotos(albumId?: string): Observable<any> {
    let url = `${this.baseUrl}/photos`;
    if (albumId) {
      url += `?albumId=${albumId}`;
    }
    return this.http.get(url);
  }

  /* ===== TODOS ===== */
  getTodos(userId?: string): Observable<any> {
    let url = `${this.baseUrl}/todos`;
    if (userId) {
      url += `?userId=${userId}`;
    }
    return this.http.get(url);
  }
/* ===== CREATE ===== */
createPost(body: any): Observable<any> {
  return this.http.post<any>(
    `${this.baseUrl}/posts`,
    body
  );
}

/* ===== UPDATE ===== */
updatePost(id: string, body: any): Observable<any> {
  return this.http.put<any>(
    `${this.baseUrl}/posts/${id}`,
    body
  );
}

/* ===== DELETE ===== */
deletePost(id: string): Observable<any> {
  return this.http.delete<any>(
    `${this.baseUrl}/posts/${id}`
  );
}

}


