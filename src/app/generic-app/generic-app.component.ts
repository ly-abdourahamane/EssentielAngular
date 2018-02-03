import {Component, Inject, OnInit} from '@angular/core';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GenericAppService} from '../services/generic/generic-app.service';

@Component({
  selector: 'app-generic-app',
  templateUrl: './generic-app.component.html',
  styleUrls: ['./generic-app.component.css'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: -5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75px)', offset: 1}),
          ]))
        ]), {optional: true})

      ])
    ])
  ]
})
export class GenericAppComponent implements OnInit {

  goals = [];
  value: string;
  myForm: FormGroup;

  continents: any;

  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
              private _genericService: GenericAppService) { }

  ngOnInit() {
    this.createForm();
    this._genericService.goal.subscribe(res => this.goals = res);
    this._genericService.changeGoal(this.goals);

    this._genericService.continents.subscribe(res => this.continents = res);

    this._genericService.getContinents().subscribe(res => {
      console.log(res);
      this.continents = res;
    });

    this._genericService.changeContinents(this.continents);
  }

  createForm(): void {
    this.myForm = this.formBuilder.group({
      nom: new FormControl('', {        validators: Validators.required})
    }, { updateOn: 'blur' });
  }

  onSubmit() {
    const formValue = this.myForm.value;
    this.goals.push(formValue.nom);
    this.resetForm();
    this._genericService.changeGoal(this.goals);
  }

  resetForm() {
    this.myForm.reset();
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this._genericService.changeGoal(this.goals);
  }

  removeContinent(i) {
    this.continents.splice(i, 1);
    this._genericService.changeContinents(this.continents);
  }

}
