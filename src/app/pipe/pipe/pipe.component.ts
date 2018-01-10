import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  date: Date = new Date('2018-10-01');
  constructor() { }

  ngOnInit() {
  }

}
