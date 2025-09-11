//===================================
// NOte  Class_1_to_8
//===================================
//#region
// adding  HeaderComponent to app
// import { Component } from '@angular/core';
// import { HeaderComponent } from './Class_1_to_8/header.component';

// @Component({
//   selector: 'app-root',
//   imports: [HeaderComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {}

//#endregion

//
//
//===================================
// NOte  Class_9_to_19
//===================================
//#region
// adding  HeaderComponent to app
// import { Component } from '@angular/core';
// import { HeaderComponent } from './Class_9_to_19/header/header.component';
// import { UserComponent } from './Class_9_to_19/user/user.component';

// @Component({
//   selector: 'app-root',
//   imports: [HeaderComponent, UserComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {}

//#endregion

//
//
//===================================
// NOte  Class_20_to_30
//===================================
//#region
// //adding  HeaderComponent to app
// import { Component } from '@angular/core';
// import { HeaderComponent } from './Class_20_to_30/header/header.component';
// import { UserComponent } from './Class_20_to_30/user/user.component';
// import { DUMMY_USERS } from './dummy-users';
// import { TasksComponent } from './Class_20_to_30/tasks/tasks.component';

// @Component({
//   selector: 'app-root',
//   imports: [HeaderComponent, UserComponent, TasksComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//   users = DUMMY_USERS;

//   //=============== 26 Class so on ===========
//   // onSelectUser(id: string) {
//   //   alert(id);
//   // }

//   //=============== 29 Class ===========
//   selectedUserId!: string;
//   onSelectUser(id: string) {
//     this.selectedUserId = id;
//   }

//   get onSelectUserObj() {
//     return this.users.find((x) => x.id == this.selectedUserId);
//   }
// }

//#endregion

//
//
//===================================
// NOte  Class_31_to_32
//===================================
//#region
// //adding  HeaderComponent to app
// import { Component } from '@angular/core';
// import { DUMMY_USERS } from './dummy-users';
// import { HeaderComponent } from './Class_31_to_32/header/header.component';
// import { UserComponent } from './Class_31_to_32/user/user.component';
// import { TasksComponent } from './Class_31_to_32/tasks/tasks.component';

// @Component({
//   selector: 'app-root',
//   imports: [HeaderComponent, UserComponent, TasksComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//   users = DUMMY_USERS;

//   selectedUserId!: string;
//   onSelectUser(id: string) {
//     this.selectedUserId = id;
//   }

//   get onSelectUserObj() {
//     return this.users.find((x) => x.id == this.selectedUserId);
//   }
// }

//#endregion

//
//
//===================================
// NOte  Class_33_to_41
//===================================
//#region
// //adding  HeaderComponent to app
// import { Component } from '@angular/core';
// import { DUMMY_USERS } from './dummy-users';
// import { HeaderComponent } from './Class_33_to_41/header/header.component';
// import { UserComponent } from './Class_33_to_41/user/user.component';
// import { TasksComponent } from './Class_33_to_41/tasks/tasks.component';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   imports: [HeaderComponent, UserComponent, TasksComponent, CommonModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//   users = DUMMY_USERS;

//   selectedUserId!: string;
//   onSelectUser(id: string) {
//     this.selectedUserId = id;
//   }

//   get onSelectUserObj() {
//     return this.users.find((x) => x.id == this.selectedUserId);
//   }
// }

//#endregion

//
//
//===================================
// NOte  Class_42_to_47
//===================================
//#region
//adding  HeaderComponent to app
import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Class_42_to_47/header/header.component';
import { UserComponent } from './Class_42_to_47/user/user.component';
import { TasksComponent } from './Class_42_to_47/tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  selectedUserId!: string;
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  get onSelectUserObj() {
    return this.users.find((x) => x.id == this.selectedUserId);
  }
}

//#endregion
