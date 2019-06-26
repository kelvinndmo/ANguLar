import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  //define properties here
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    Age: null
  };
  users: User[];
  showExtended: Boolean = true;
  loaded: Boolean = false;
  enableAdd: Boolean = false;
  showUsersForm: Boolean = false;
  @ViewChild('userForm', { static: true }) form: any;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users = this.dataService.getUsers();
    this.loaded = true;
  }

  // addUser() {
  //   this.users.unshift(this.user);
  //   this.user.register = new Date();
  //   this.user.isActive = true;

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     Age: null,
  //     email: ''
  //   };
  // }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.register = new Date();
      value.hide = true;
      this.users.unshift(value);

      this.form.reset();
    }
  }
}
