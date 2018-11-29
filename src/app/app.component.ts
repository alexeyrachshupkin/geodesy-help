import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {map} from 'rxjs/internal/operators';
import {User} from './user/user.interface';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  users = [];
  searchStr = '';

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(response => {
      this.users = response.results;
      console.log(this.users);
    });
    // name: user.name.first + ' ' +  user.name.last

  }
}
