import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EntrepriseService {

  constructor(private http: HttpClient) { }

  getEntreprise() {
    return this.http.get('http://localhost:8080/continents/1');
  }
}
