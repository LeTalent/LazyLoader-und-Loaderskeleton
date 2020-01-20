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
    },
    {
      name: 'Pushkahn',
      surename: 'The Best',
      picture: 'assets/images/vw1.jpg'
    },
    {
      name: 'Nampradou',
      surename: 'Hongback',
      picture: 'assets/images/vw.jpg'
    },
    {
      name: 'Guiza Gozo',
      surename: 'Dzaguina',
      picture: 'assets/images/Hotel Foto einbinden.jpg'
    },
    {
      name: 'tchou Nkeu',
      surename: 'Pa a chi',
      picture: 'assets/images/vw3.jpg'
    },
    {
      name: 'tchou Nkeu',
      surename: 'Pa a chi',
      picture: 'assets/images/vw3.jpg'
    },
    {
      name: 'tchou Nkeu',
      surename: 'Pa a chi',
      picture: 'assets/images/vw3.jpg'
    },
    {
      name: 'tchou Nkeu',
      surename: 'Pa a chi',
      picture: 'assets/images/vw3.jpg'
    },
    {
      name: 'tchou Nkeu',
      surename: 'Pa a chi',
      picture: 'assets/images/vw3.jpg'
    },
    {
      name: 'tchou Nkeu',
      surename: 'Pa a chi',
      picture: 'assets/images/vw3.jpg'
    },
    {
      name: 'tchou Nkeu',
      surename: 'Pa a chi',
      picture: 'assets/images/vw3.jpg'
    },
    {
      name: 'tchou Nkeu',
      surename: 'Pa a chi',
      picture: 'assets/images/vw3.jpg'
    },
    {
      name: 'tchou Nkeu',
      surename: 'Pa a chi',
      picture: 'assets/images/vw3.jpg'
    },
    {
      name: 'tchou Nkeu',
      surename: 'Pa a chi',
      picture: 'assets/images/vw3.jpg'
    },
    {
      name: 'tchou Nkeu',
      surename: 'Pa a chi',
      picture: 'assets/images/vw3.jpg'
    }
  ];

  constructor() {}

  public getAllUsers(): Observable<User[]> {
    const usersObservable$ = of(this.users);

    return usersObservable$;
  }
}
