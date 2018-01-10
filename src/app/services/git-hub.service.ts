import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlBuilder} from './url-builder';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Repo} from '../models/repo';

@Injectable()
export class GitHubService {

  private urlBuilder: UrlBuilder;

  constructor(private httpClient: HttpClient) {
    this.urlBuilder = new UrlBuilder(environment.GITHUB_API_ROOT, environment.GITHUB_API_TOKEN);
  }

  getRepos(username: string): Observable<Repo[]> {
    return this.httpClient.get<Repo[]>(this.urlBuilder.getRepos(username));
  }

  deleteRepo(username: string, repository: string): Observable<any> { // normal c'est une de caractère
    return this.httpClient.delete(this.urlBuilder.deleteRepo(username, repository));
  }

  addRepo(repoName: string): Observable<any> {
    const headers = new Headers({'Content-Type': 'application/json'});
    // const options = new RequestOptions({headers: headers});

    return this.httpClient.get(''); // this.httpClient.post(this.urlBuilder.addRepo(), {name: repoName}, options);
  }
}
