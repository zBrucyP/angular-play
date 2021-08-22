import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostComponent } from '../post/post.component';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor() { 
    this.posts$ = this.getPosts();
  }

  ngOnInit(): void {
  }

  getPosts(): Observable<Post[]> {
    return of([new Post("title", "", "cont", "", "")]);
  }

}
