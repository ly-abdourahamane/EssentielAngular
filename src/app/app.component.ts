import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from './core/animations/router.transition';
import {EntrepriseService} from './services/entreprise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition],
  providers: [EntrepriseService]

})
export class AppComponent {

  app = 'title';

  entreprise: any;

  constructor(router: Router, private entrepriseService: EntrepriseService) {
    // router.navigateByUrl('/form');
     this.entrepriseService.getEntreprise().subscribe(result => {
       this.entreprise = result;
       console.log(this.entreprise);
     });
  }

}
