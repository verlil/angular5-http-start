import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable() // this is to make injecting default http angular service injectable
export class ServerService {
  constructor(private http: Http) {
  }

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http
      .post('https://angular5-http-start.firebaseio.com/data.json',
        servers,
        {headers: headers);
    // return this.http.post('https://angular5-http-start.firebaseio.com/log.json', servers);
    // at this point we don't sending a request yet, because http service is using Observable
    // so sa there's no listener to responce, there's no reasons to send a request
    // that's why we return this observable
  }

  getServers(){
        return this.http.get('https://angular5-http-start.firebaseio.com/data.json');
  }
}
