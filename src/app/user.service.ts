import {HttpClient} from '@angular/common/http';

export class UserService {
  users = [{name: 'USRER 1'},
    {name: 'USRER 2'},
    {name: 'USRER 3'},
    {name: 'USRER 4'}
  ];

  constructor(private http: HttpClient) {}
}
