export class UrlBuilder {

  constructor(private url: string, private token: string) {

  }

  getRepos(username: string): string {
    return this.appendToken(`${this.url}/abdouly/${username}/repos`);
  }

  deleteRepo(username: string, repository: string): string {
    return this.appendToken(`${this.url}/abdouly/${username}/${repository}`);
  }

  addRepo(): string {
    return this.appendToken(`${this.url}/abdouly/repos`);
  }

  private appendToken(url: string): string {

    if (this.token) {
      return url + `?access_token=${this.token}`;
    }

    return url;
  }
}
