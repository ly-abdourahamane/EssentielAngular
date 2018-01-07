import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
