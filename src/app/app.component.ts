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
import { Component } from '@angular/core';
import { HeaderComponent } from './Class_9_to_19/header/header.component';
import { UserComponent } from './Class_9_to_19/user/user.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}

//#endregion
