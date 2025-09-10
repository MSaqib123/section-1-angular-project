import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //==== 12 ===
  selectUser = DUMMY_USERS[randomIndex];

  get ImagePath() {
    return 'assets/users/' + this.selectUser.avatar;
  }

  onChangeUser() {
    // console.log('Click');
    //===================================
    // Managing State
    // NOte In programming, state is just the data (like the customer’s name or order)
    //===================================
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectUser = DUMMY_USERS[randomIndex];
  }
}
