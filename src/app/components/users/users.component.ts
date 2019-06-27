import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

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
  data: any;
  constructor(private dataService: UserService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe(users => {
      this.users = users;
    });
    this.loaded = true;

    this.dataService.getData().subscribe(data => {
      console.log(data);
    });
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
      this.dataService.addUser(value);

      this.form.reset();
    }
  }
}
