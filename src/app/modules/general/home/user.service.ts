import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {

      name: 'Krunal',
      surename: 'VVP Engineering College',
      picture: 'assets/images/vw2.jpg'
    },
    {
      name: 'Rushabh',
      surename: 'VVP Engineering College',
      picture: 'assets/images/vw3.jpg'
    },
    {
      name: 'Ankit',
      surename: 'VVP Engineering College',
      picture: 'assets/images/vw4.jpg'
    }
  ];

  constructor() {}

  public getAllUsers(): Observable<User[]> {
    const usersObservable$ = of(this.users);

    return usersObservable$;
  }
}
