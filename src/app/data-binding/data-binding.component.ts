import { Component, OnInit } from '@angular/core';
import {GenericAppService} from '../services/generic/generic-app.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  person: string = 'John Doe';
  age: number = 30;
  address: any = {street: 'rue du paradis', city: '3100 Toulouse'};

  alignement: string = 'right';
  couleur: string = 'red';

  compteur: any = 'N/A';

  goals: any;

  constructor( private _genericService: GenericAppService) { }

  ngOnInit() {
    console.log('data binding');
    this._genericService.goal.subscribe(res => this.goals = res);
  }

  modifierPersonne(): void {
    this.person = 'Mamadou Dioubou LY';
  }

  annulerModification(): void {
    this.person = 'John Doe';
  }

  myValueChange(event): void {
    this.compteur = event.value;
  }

}
