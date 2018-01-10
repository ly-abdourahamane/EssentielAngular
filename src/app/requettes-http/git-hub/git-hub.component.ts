import { Component, OnInit } from '@angular/core';
import {GitHubService} from '../../services/git-hub.service';
import {Repo} from '../../models/repo';

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.css']
})
export class GitHubComponent implements OnInit {

  repos: Repo[];
  message: string;

  constructor(private gitHubService: GitHubService) { }

  ngOnInit() {

   // this.gitHubService.getRepos('test').subscribe(x => console.log(x));
    console.log('gitHub component');
  }

  addRepo(repoName: string): void {
    this.message = null;

    this.gitHubService.addRepo(repoName).subscribe(repo => {
      this.message = repo.name + ' à été créé';
    }, error => this.message = error);
  }

  deleteRepo(repo: Repo): void {
    this.message = null;

    this.gitHubService.deleteRepo('test', repo.name).subscribe(() => {
      this.message = 'Repo supprimé';
      this.repos.splice(111111111111111111111, 1);
    }, error => this.message = error);
  }

}
