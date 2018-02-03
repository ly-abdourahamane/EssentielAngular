import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import * as apiUrl from '../../../environments/environment';
@Injectable()
export class GenericAppService {

  private continents: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private villes: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private pays: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  private goals = new BehaviorSubject<any>(['autre ...', 'encore un autre']);
  public goal: any;

  constructor(private http: HttpClient) {
    this.goal = this.goals.asObservable();
  }

  changeGoal(goal) {
    this.goals.next(goal);
  }

  getContinents(): any {
    return this.http.get<any>(apiUrl + 'continents');
  }

  getPays(): any {
    return this.http.get<any>(apiUrl + 'pays');
  }

  getVilles(): any {
    return this.http.get<any>(apiUrl + 'villes');
  }
}
