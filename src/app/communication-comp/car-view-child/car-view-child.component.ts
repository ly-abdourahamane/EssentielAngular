import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-view-child',
  templateUrl: './car-view-child.component.html',
  styleUrls: ['./car-view-child.component.css']
})
export class CarViewChildComponent implements OnInit {

  _haut = false;
  _bas = false;
  _gauche = false;
  _droite = false;

  constructor() { }

  ngOnInit() {
  }

  haut() {
    this._haut = ! this._haut;
  }

  bas() {
    this._bas = !this._bas;
  }

  gauche() {
    this._gauche = !this._gauche;
  }

  droite() {
    this._droite = !this._droite;
  }

}
