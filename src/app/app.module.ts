import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {ChildComponent} from './child/child.component';
import {CadreComponent} from './child/cadre/cadre.component';
import {HighlightDirective} from './directive/highlight.directive';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {Comp1Component} from './data-binding/comp1/comp1.component';
import {Comp2Component} from './data-binding/comp2/comp2.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CadreComponent,
    HighlightDirective,
    DataBindingComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
