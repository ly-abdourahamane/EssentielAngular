import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {ChildComponent} from './child/child.component';
import {CadreComponent} from './child/cadre/cadre.component';
import {HighlightDirective} from './directive/highlight.directive';
import {DataBindingComponent} from './data-binding/data-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CadreComponent,
    HighlightDirective,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
