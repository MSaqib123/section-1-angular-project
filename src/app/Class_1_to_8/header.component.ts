import { Component } from '@angular/core';

// decorator
@Component({
  selector: 'app-header',

  //======= inline Html =========
  // template: '<h1>Pakistan</h1>',
  //======= external Html =========
  templateUrl: './header.component.html',

  //======= inline Css =========
  // styles : ['h1 {color:red}'],
  //======= external Css =========
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
