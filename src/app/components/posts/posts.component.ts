import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../../models/Post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] | undefined;
  onePost: Post | undefined;
  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value);
  }
  getBubble(post: Post): void{
    this.onePost = post;
  }
}
