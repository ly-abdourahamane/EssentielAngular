import {Component, Injectable, OnChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DialogueService} from '../services/dialogue.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.css'],
})
export class FormularComponent implements OnChanges {

  myForm: FormGroup;
  message: String;

  personne = {nom: '', prenom: '', mail: '', sexe: '', ville: '', dateNaissance: ''};

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private dialogService: DialogueService) {
    this.createForm();

    this.message = route.snapshot.data['message'];

    console.log(this.message);
  }

  ngOnChanges() {
    this.myForm.reset({});
  }

  createForm(): void {
    this.myForm = this.formBuilder.group({
      nom: ['', { updateOn: 'blur', validators: [Validators.required] }],
      prenom: ['', { updateOn: 'blur', validators: [Validators.required] }],
      mail: ['', { updateOn: 'blur', validators: [Validators.required] }],
      sexe: ['', { updateOn: 'blur', validators: [Validators.required] }],
      ville: ['', { updateOn: 'blur', validators: [Validators.required] }],
      dateNaissance: ['', { updateOn: 'blur', validators: [Validators.required] }]
    });
  }

  creerUtilisateur(): void {
    if (this.myForm.dirty && this.myForm.value) {
      alert(`Form: ${this.myForm.value.nom}`);
    }
    console.log(this.myForm.value);
    this.myForm.reset({});
  }

  get diagnostic() {
    return JSON.stringify(this.myForm.value);
  }

  public canDeactivate(): Promise<boolean> | boolean {

    //ce test doit permettre de vérifier si l'utilisateur doit être informé qu'il va
    //quitter la page

    if (true) {
      console.log('promise');
      return this.dialogService.confirm('Vous voulez vraiment quitter cette page ?');
    }
  }

}
