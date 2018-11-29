import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/internal/operators';
import {User} from './user/user.interface';

@Injectable()
export class UserService {
  users = [{name: 'USRER 1'},
    {name: 'USRER 2'},
    {name: 'USRER 3'},
    {name: 'USRER 4'}
  ];

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb﻿');
  }
}
