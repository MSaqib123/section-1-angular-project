import { Component } from '@angular/core';

// decorator
@Component({
  selector: 'app-header',

  //======= inline Html =========
  // template: '<h1>Pakistan</h1>',
  //======= external Html =========
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
