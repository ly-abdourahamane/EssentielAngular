import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guard/auth.guard';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {FormularComponent} from './formular/formular.component';
import {HomeComponent} from './home/home.component';
import {CanDeactivateGuard} from './guard/can-deactivate.guard';
import {MessageResolverService} from './services/resolver/message-resolver.service';
import {DialogueService} from './services/dialogue.service';

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: '/', canActivate: [AuthGuard]},


  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'data-binding', component: DataBindingComponent, canActivate: [AuthGuard]},
  {
    path: 'form', component: FormularComponent,  canActivate: [AuthGuard],
    resolve: {message: MessageResolverService}
  }

];

// useHash: booléen activant la navigation avec des hash (#) au lieu de l'API history
// enableTracing: permet de savoir ce qui se passe à l'interieur du root.
@NgModule({
  imports: [RouterModule.forRoot(routes,
    {useHash: true, enableTracing: false, initialNavigation: true})],
  exports: [RouterModule],
  providers: [AuthGuard, CanDeactivateGuard, MessageResolverService, DialogueService]
})
export class AppRoutingModule { }
