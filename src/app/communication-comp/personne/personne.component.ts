import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  private _personne: any;

  @Input()
  set personne(personne: any) {
    if (personne && personne.hasOwnProperty('name')) {
      personne.name = this.capitalizeFirtLetter(personne.name);
    }

    if (personne && personne.hasOwnProperty('lastName')) {
      personne.lastName = this.capitalizeFirtLetter(personne.lastName);
    }

    this._personne = personne;
  }

  private capitalizeFirtLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
