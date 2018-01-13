import {Component, Injectable, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DialogueService} from '../services/dialogue.service';
import {ActivatedRoute, UrlSegment} from '@angular/router';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.css'],
})
export class FormularComponent implements OnChanges, OnInit {

  myForm: FormGroup;
  message: String;
  personForm: FormGroup;
  personMaterialForm: FormGroup;
  favoriteColor: string[];
  favoriteColor_: string[];

  personne = {nom: '', prenom: '', mail: '', sexe: '', ville: '', dateNaissance: ''};

  validationMessages: any = {
    'firstName': {
      'required': 'Le prénom est obligatoire',
      'minlength': 'Le prénom doit avoir au moins 3 caractères'
    },
    'lastName': {
      'required': 'Le nom est oubligatoire',
      'minlength': 'Le nom doit avoir au moins 3 caractères'
    },
    'favoriteColor': 'La couleur favorite est obligatoire'
  };

  formErrors: any = {
    'firstName': '',
    'favoriteColor': ''
  };

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private dialogService: DialogueService,
              private activatedRoute: ActivatedRoute) {
      this.createForm();

      this.message = route.snapshot.data['message'];

      console.log(this.message);

      this.activatedRoute.url.subscribe((s: UrlSegment[]) => {
        console.log('url :' + s);
      });

    this.activatedRoute.params.subscribe(p => {
      console.log('params :' + p);
    });
    }

    ngOnInit() {
      this.createPersonForm();
      this.favoriteColor = ['', 'rouge', 'jaune', 'vert', 'bleu'];

      this.favoriteColor_ = ['', 'rouge', 'jaune', 'vert', 'bleu'];


      this.personForm.valueChanges.subscribe(data => {
        this.onVlueChanged(data);
      });

      this.createPersonMaterialForm();

      /*this.personMaterialForm.valueChanges.subscribe(data => {
        console.log(data);
        this.onVlueChanged_(data);
      });*/

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

  createPersonForm(): void {
    this.personForm = this.formBuilder.group({
      gender: ['', Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      favoriteColor: ['', Validators.required],
      email: ['', Validators.required],
      birthday: ''
    });
    }


  createPersonMaterialForm(): void {
    this.personMaterialForm = this.formBuilder.group({
      gender_: ['', Validators.nullValidator],
      lastName_: ['', [Validators.nullValidator, Validators.minLength(3)]],
      firstName_: ['', [Validators.nullValidator, Validators.minLength(3)]],
      favoriteColor_: ['', Validators.nullValidator],
      email_: ['', Validators.nullValidator],
      birthday_: ''
    });
  }

  creerUtilisateur(): void {
    if (this.myForm.dirty && this.myForm.value) {
      alert(`Form: ${this.myForm.value.nom}`);
    }
    console.log(this.myForm.value);
    this.myForm.reset({});
  }

  onVlueChanged(data?: any): void {
     const form = this.personForm.controls;
     for (const field in this.personForm.controls) {

       // clear previous previous error message (if any)
       this.formErrors[field] = '';

       const control = this.personForm.controls[field];

       if (control && control.dirty && !control.valid) {
         const messages = this.validationMessages[field];

         for (const key in control.errors) {
           this.formErrors[field] += messages[key] + '';
         }
       }
     }
  }


/*
  onVlueChanged_(data?: any): void {
    console.log(data);
    const form = this.personMaterialForm.controls;
    for (const field in form) {

      // clear previous previous error message (if any)
      this.formErrors[field] = '';

      const control = this.personMaterialForm.controls[field];

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];

        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + '';
        }
      }
    }
  }*/

  get diagnosticForm() {
    return JSON.stringify(this.myForm.value);
  }

  get diagnosticPerson() {
    return JSON.stringify(this.personForm.value);
  }

  get diagnosticPersonMaterialForm() {
    return JSON.stringify(this.personMaterialForm.value);
  }

  public canDeactivate(): Promise<boolean> | boolean {

    // ce test doit permettre de vérifier si l'utilisateur doit être informé qu'il va
    // quitter la page

    if (true) {
      console.log('promise');
      return this.dialogService.confirm('Vous voulez vraiment quitter cette page ?');
    }
  }

}
