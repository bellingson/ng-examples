import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import {ProductListComponent, ProductService } from "./product";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ ProductService ],
  directives: [ ROUTER_DIRECTIVES ]
})
export class AppComponent {
  title = 'app works!';
}

