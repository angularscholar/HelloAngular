import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class TokenService {

  num = Math.random();

  constructor(private _http: HttpClient) { }

  getToken(){
    console.log('token service uspjesno injektan ==> ' + this.num);
    return this._http.post(
      "http://localhost:8080/oauth/token?grant_type=password&username=goran&password=12345",

      {withCredentials: true},
      
      {headers: new HttpHeaders(
        {'Authorization':'Basic ' + btoa('client:secret')}
      )}
    )
  }
}
