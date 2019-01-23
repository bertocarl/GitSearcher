import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  private username: string;
  private clientid = 'ec51023e47694c2cb4a9';
  private clientsecret = '2eb08d690c48951f82d92bb1f67ff5d6a165591b';

  constructor(private http: Http) {
    this.username = 'bertocarl';
  }

  getProfileInfo() {
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
      .map(res => res.json());
  }

  getProfileRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
      .map(res => res.json());
  }

  updateProfile(username: string) {
    this.username = username;
  }

}
