import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import {ChildComponent} from './child/child.component';
import {CadreComponent} from './child/cadre/cadre.component';
import {HighlightDirective} from './directive/highlight.directive';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {Comp1Component} from './data-binding/comp1/comp1.component';
import {Comp2Component} from './data-binding/comp2/comp2.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormularComponent} from './formular/formular.component';
import { HomeComponent } from './home/home.component';
import { PersonneComponent } from './communication-comp/personne/personne.component';
import {CommunicationCompComponent} from './communication-comp/communication-comp.component';
import { CarViewChildComponent } from './communication-comp/car-view-child/car-view-child.component';
import {HttpClientModule} from '@angular/common/http';
import {GitHubComponent} from './requettes-http/git-hub/git-hub.component';

// Angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule, MatOptionModule, MatRadioModule,
  MatSelectModule,

} from '@angular/material';
import { PipePipe } from './pipe/pipe.pipe';
import { PipeComponent } from './pipe/pipe/pipe.component';

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
    CommunicationCompComponent,
    CarViewChildComponent,
    GitHubComponent,
    PipePipe,
    PipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Angular material
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
