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
  //
  //
  //=============== 21,22,23 Class so on ===========
  //#region
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // get ImagePath() {
  //   return 'assets/users/' + this.avatar;
  // }
  // onSelectUser() {}
  //#endregion

  //
  //
  //=============== 24 signal inputs ===========
  //#region
  // avatar = input<string>();
  // name = input<string>();
  // ImagePath = computed(() => 'assets/users/' + this.avatar());
  // onSelectUser() {}
  //#endregion

  //
  //
  //=============== 26 Class ===========
  //#region
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter();
  // get ImagePath() {
  //   return 'assets/users/' + this.avatar;
  // }
  // onSelectUser() {
  //   this.select.emit(this.id);
  // }
  //#endregion

  //
  //
  //=============== 27  singls Emit Value Class so on ===========
  //#region
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // select = output<string>();
  // get ImagePath() {
  //   return 'assets/users/' + this.avatar;
  // }
  // onSelectUser() {
  //   this.select.emit(this.id);
  // }
  //#endregion

  //
  //
  //=============== 27  singls Emit Value Class so on ===========
  //#region
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();
  get ImagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
    this.select.emit(this.id);
  }
  //#endregion
}
