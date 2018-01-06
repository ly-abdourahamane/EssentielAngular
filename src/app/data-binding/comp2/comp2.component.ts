import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  counterValue: number = 0;

  @Output() counterChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increment(): void {
    this.counterValue++;
    this.counterChange.emit({value: this.counterValue});
  }

  decrement(): void {
    this.counterValue--;
    this.counterChange.emit({value: this.counterValue});
  }

}
