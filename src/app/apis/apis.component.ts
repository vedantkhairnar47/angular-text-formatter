import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css']
})
export class ApisComponent {

  userId: string = '';
  responseData: any;
  errorMsg = '';
  loading = false;

  // postId!: number;
  requestBody ={
    body: '',
    // userId: this.userId,
  };

  constructor(private apiService: ApiService) {}

  loadComments() {
    this.callApi(this.apiService.getComments(this.userId));
  }

  loadAlbums() {
    this.callApi(this.apiService.getAlbums(this.userId));
  }

  loadPhotos() {
    this.callApi(this.apiService.getPhotos(this.userId));
  }

  loadTodos() {
    this.callApi(this.apiService.getTodos(this.userId));
  }


  private callApi(obs: any) {
    this.loading = true;
    this.errorMsg = '';
    this.responseData = null;

    obs.subscribe({
      next: (res: any) => {
        this.responseData = res;
        this.loading = false;
      },
      error: () => {
        this.errorMsg = 'Failed to fetch data';
        this.loading = false;
      }
    });
  }

  createPost() {
  this.apiService.createPost(this.requestBody).subscribe({
    next: (res) => {
      this.responseData = res;
      this.errorMsg = '';
    },
    error: () => {
      this.errorMsg = 'Create failed';
    }
  });
}
updatePost() {
  if (!this.userId) {
    this.errorMsg = 'Post ID required for update';
    return;
  }

  this.apiService.updatePost(this.userId, this.requestBody).subscribe({
    next: (res) => {
      this.responseData = res;
      this.errorMsg = '';
    },
    error: () => {
      this.errorMsg = 'Update failed';
    }
  });
}
deletePost() {
  if (!this.userId) {
    this.errorMsg = 'Post ID required for delete';
    return;
  }

  this.apiService.deletePost(this.userId).subscribe({
    next: (res) => {
      this.responseData = res;
      this.errorMsg = '';
    },
    error: () => {
      this.errorMsg = 'Delete failed';
    }
  });
}

}
