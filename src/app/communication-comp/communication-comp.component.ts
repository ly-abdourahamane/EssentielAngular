import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {CarViewChildComponent} from './car-view-child/car-view-child.component';
import {PersonneComponent} from './personne/personne.component';

@Component({
  selector: 'app-communication-comp',
  templateUrl: './communication-comp.component.html',
  styleUrls: ['./communication-comp.component.css']
})
export class CommunicationCompComponent implements OnInit {

  characters = [
    {name: 'abdou', lastName: 'abd'},
    {name: 'djobou', lastName: 'mamadou'},
    {name: 'kadiatou', lastName: 'bayo'}
  ];

  disable = false;
  theBest: any;
  color_ = 'blue';

  @ViewChild(CarViewChildComponent) car: CarViewChildComponent;
  @ViewChildren(PersonneComponent) private personneComponents: QueryList<PersonneComponent>;

  constructor() { }

  ngOnInit() {
  }

  public isElected(personne: any): void {
    console.log(personne);
    this.theBest = personne;
    this.disable = true;
  }

  clignotant() {
    this.car.gauche();
    this.car.droite();
  }

  porte() {
    this.car.haut();
    this.car.bas();
  }

  color() {
    console.log('color');
    this.personneComponents.forEach(personne => {
      personne.colorOn();
    });
  }

}
