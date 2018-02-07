import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import * as apiUrl from '../../../environments/environment';
@Injectable()
export class GenericAppService {

  private _continents: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private _villes: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private _pays: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  private goals = new BehaviorSubject<any>(['autre ...', 'encore un autre']);
  goal: any;
  continents: any;


  constructor(private http: HttpClient) {
    this.goal = this.goals.asObservable();
    this.continents = this._continents.asObservable();
  }

  changeGoal(goal) {
    this.goals.next(goal);
  }


  changeContinents(continents) {
    this._continents.next(continents);
  }

  getContinents(): any {
    return this.http.get<any>(apiUrl.environment.API_URL + 'entreprises');
  }

  getPays(): any {
    return this.http.get<any>(apiUrl + 'pays');
  }

  getVilles(): any {
    return this.http.get<any>(apiUrl + 'villes');
  }
}
