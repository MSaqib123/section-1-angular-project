import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //=============== 20. Class ========
  // Signls
  //#region
  // selectUser = signal(DUMMY_USERS[randomIndex]);

  // ImagePath = computed(() => 'assets/users/' + this.selectUser().avatar);

  // onChangeUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectUser.set(DUMMY_USERS[randomIndex]);
  // }
  //#endregion

  //=============== 21. Class so on ========
  onSelectUser() {}
}
