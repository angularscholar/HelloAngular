import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Component } from '@angular/core';
import { TokenService } from './services/token.service';

/*
*
* Components - basic building block of application, that have associated data. 
* Component is class containing component logic decorated with @Component decorator
* Decorator is composed of following metadata which hooks up the component to our template with extra info
*   selector - name of the component which is used to refer to the component in html
*   template - url or embedded html with angular specific features
*   styles   - CSS used
* Running a component - it must be referenced in html using the component selector
*
* Service TokenService is added in Providers section. It's injected in constructor,
* observe 2 ways of injectin either using private,public access modifier or explicitly assigning variable to a service object
*/  

@Component({
  selector: 'app-root',
  providers: [TokenService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'ProjectFrontend';
  
  tokenService:TokenService = null;
  constructor(private _http: HttpClient, tokenService: TokenService){
    console.log("Constructor called");
    this.tokenService = tokenService;
    
  }

  getToken(){
    this.tokenService.getToken().subscribe(res => {console.log(res);this.getUserNameOfToken(res)});
  }

  getUserNameOfToken(tokenInfo){
    this._http.post(
      "http://localhost:8080/api/getUserName",

      {withCredentials: true},
      
      {headers: new HttpHeaders(
        {'Authorization':'Bearer ' + tokenInfo['access_token']}
      )}
    ).subscribe(res => {console.log(res)});

  }


  get2(){
    return 2;
  }

  names = ['Ime1','Ime2','Ime3','Ime4'];

  showTitle = true;

}
