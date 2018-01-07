import { Injectable } from '@angular/core';
import { CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {FormularComponent} from '../formular/formular.component';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<FormularComponent> {

  canDeactivate(component: FormularComponent) {
    console.log('CanDeactivateGuard ' + component.canDeactivate);
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
