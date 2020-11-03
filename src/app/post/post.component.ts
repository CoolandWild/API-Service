import { Component, OnInit } from '@angular/core';
import { userService } from '../services/users.service';
import { Post } from '../classes/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private post : userService) { }

  listPost : Post[];

  ngOnInit(): void {
    this.post.getPost().subscribe((data) => {
      this.listPost = data;
    });
  }
}