import { Component, OnInit } from '@angular/core';
import { userService } from '../services/users.service';
import { Users } from '../classes/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor( private user : userService) { }

  listUsers: Users[];


  ngOnInit(): void {
    this.user.getUsers().subscribe((data) => {
      this.listUsers = data;
    });
  }

}