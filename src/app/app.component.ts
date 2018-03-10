import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {routerTransition} from './core/animations/router.transition';
import {EntrepriseService} from './services/entreprise.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition],
  providers: [EntrepriseService]

})
export class AppComponent implements OnInit{

  app = 'title';

  entreprise: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private entrepriseService: EntrepriseService,
              private title: Title) {
    // router.navigateByUrl('/form');

    this.title.setTitle('Application angular learning');

    console.log();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('navigationEnd', event);
      }
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

      }
    });

    /*    this.router.events.filter(event => event instanceof NavigationEnd)
          .map(() => this.activatedRoute)
          .map(route => {
            while (route.firstChild) {
              route = route.firstChild;
            }

            return route;
          })
          .filter(route => route.outlet === 'primary')
          .mergeMap(route => route.data)
          .subscribe((data) => this.title.setTitle(data['title']));

         this.entrepriseService.getEntreprise().subscribe(result => {
           this.entreprise = result;
           console.log(this.entreprise);
         });*/
  }

  ngOnInit() {

  }


}
