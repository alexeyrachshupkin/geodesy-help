
import {Injectable} from '@angular/core';

@Injectable
export class UserService {

  // constructor(private http: HttpClient) { }

  getUsers() {
    // return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb');
    return [
      {name: 'USRER 1'},
      {name: 'USRER 2'},
      {name: 'USRER 3'},
      {name: 'USRER 4'}
    ];
  }
}
