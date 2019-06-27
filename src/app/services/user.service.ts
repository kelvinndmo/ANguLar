import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
// return an array as an observable

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;
  constructor() {
    this.users = [
      {
        firstName: 'Kelvin',
        lastName: ' Onkundi',
        Age: 30,
        email: 'ndemokelvin@gmail.com',
        isActive: true,
        register: new Date('2019-03-26 10:30:45'),
        hide: true
      },
      {
        firstName: 'Alex',
        lastName: ' Iwobi',
        Age: 35,
        email: 'ndemokelvin@gmail.com',
        register: new Date('2019-01-20 12:30:00'),
        hide: true
      },
      {
        firstName: 'Millicent',
        lastName: ' Kerubo',
        Age: 29,
        email: 'alexiwobi@gmail.com',
        register: new Date('2010-02-30 10:30:00'),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(2);
      }, 1000);
      setTimeout(() => {
        observer.next(3);
      }, 2000);
      setTimeout(() => {
        observer.next(4);
      }, 3000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
