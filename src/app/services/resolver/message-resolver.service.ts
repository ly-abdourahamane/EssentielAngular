import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class MessageResolverService implements Resolve<String> {

  constructor() { }

  //on sumule un traitement
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<String> | String {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve('Message resolver');
        console.log('+++++++++++++++++message resolver++++++++++++');
      }, 500);
    });
  }
}
