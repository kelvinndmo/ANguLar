import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];
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

  getUsers(): User[] {
    return this.users;
  }
}
