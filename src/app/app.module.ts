import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ChildComponent} from './child/child.component';
import {CadreComponent} from './child/cadre/cadre.component';
import {HighlightDirective} from './directive/highlight.directive';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {Comp1Component} from './data-binding/comp1/comp1.component';
import {Comp2Component} from './data-binding/comp2/comp2.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormularComponent} from './formular/formular.component';

import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PersonneComponent } from './communication-comp/personne/personne.component';
import {CommunicationCompComponent} from './communication-comp/communication-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CadreComponent,
    HighlightDirective,
    DataBindingComponent,
    Comp1Component,
    Comp2Component,
    FormularComponent,
    HomeComponent,
    PersonneComponent,
    CommunicationCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
