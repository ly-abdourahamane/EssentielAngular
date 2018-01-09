import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  @Input() personne: any;

  @Input() disable = false;
  @Output() onChoose = new EventEmitter<boolean>();

  color: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.updatePersonne();
  }

  public updatePersonne(): any {
    if (this.personne && this.personne.hasOwnProperty('name')) {
      this.personne.name = this.capitalizeFirtLetter(this.personne.name);
    }

    if (this.personne && this.personne.hasOwnProperty('lastName')) {
      this.personne.lastName = this.capitalizeFirtLetter(this.personne.lastName);
    }

    return this.personne;
  }

/*
  get this.personne(): any {
    if (this._this.personne && typeof this._this.personne === 'string') {
      this._this.personne.lastName = this.capitalizeFirtLetter(this._this.personne.lastName);
    }

    return this._this.personne;
  }*/

  private capitalizeFirtLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  public choose(): void {
    this.onChoose.emit(this.personne);
  }

  public colorOn() {
    console.log('colorOn');
    this.color = !this.color;
  }

}
