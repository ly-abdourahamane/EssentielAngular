import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from './core/animations/router.transition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition]

})
export class AppComponent {

  app = 'title';

  constructor(router: Router) {
    // router.navigateByUrl('/form');
  }
}
