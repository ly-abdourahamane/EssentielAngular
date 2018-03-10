import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guard/auth.guard';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {FormularComponent} from './formular/formular.component';
import {HomeComponent} from './home/home.component';
import {CanDeactivateGuard} from './guard/can-deactivate.guard';
import {MessageResolverService} from './services/resolver/message-resolver.service';
import {DialogueService} from './services/dialogue.service';
import {CommunicationCompComponent} from './communication-comp/communication-comp.component';
import {GitHubComponent} from './requettes-http/git-hub/git-hub.component';
import {GitHubService} from './services/git-hub.service';
import {PipeComponent} from './pipe/pipe/pipe.component';
import {GenericAppComponent} from './generic-app/generic-app.component';
import {GenericAppService} from './services/generic/generic-app.service';
import {CountryComponent} from './country/country.component';

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: '/', canActivate: [AuthGuard], data: {title: 'Accueil'}},

  {path: 'country', component: CountryComponent},

  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'data-binding', component: DataBindingComponent, canActivate: [AuthGuard], data: {title: 'Data binding'}},
  {
    path: 'form', component: FormularComponent,  canActivate: [AuthGuard], data: {title: 'Formulaire'},
      resolve: {message: MessageResolverService}
  },

  {path: 'communication', component: CommunicationCompComponent},

  {path: 'github', component: GitHubComponent, canActivate: [AuthGuard], children: [
      {path: 'pipe', component: PipeComponent, data: {title: 'Pipe'}}
    ]},

  {path: 'generic', component: GenericAppComponent, data: {title: 'Generic'}}
  ];

// useHash: booléen activant la navigation avec des hash (#) au lieu de l'API history
// enableTracing: permet de savoir ce qui se passe à l'interieur du root.
@NgModule({
  imports: [RouterModule.forRoot(routes,
    {useHash: false, enableTracing: false, initialNavigation: true})],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    CanDeactivateGuard,
    MessageResolverService,
    DialogueService,
    GitHubService,
    GenericAppService
  ]
})
export class AppRoutingModule { }
