import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'angular-starter';
  version = 'Angular version 8.2.14';
  users: User[];
  loaded = false;

  constructor(private userServ: UserService) {}

  ngOnInit() {
    this.userServ.getAllUsers().subscribe(res => (this.users = res));
    this.loaded = true;
  }
}
