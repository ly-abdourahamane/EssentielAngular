import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  person: string = 'John Doe';
  age: number = 30;
  address: any = {street: 'rue du paradis', city: '3100 Toulouse'};

  align: string = 'right';
  couleur: string = 'red';

  constructor() { }

  ngOnInit() {
  }

}
