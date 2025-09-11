import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { User } from './User.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// ===================================
// NOTE Advane Type_Script Type Illisass Way
// ===================================
// type User={
//     id:string,
//     avatar:string,
//     name:string;
// }

// ===================================
// NOTE Advane Type_Script Type Illisass Way
// Mostly we used  Interface object
// ===================================
// interface User {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>();
  get ImagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
  //#endregion
}
