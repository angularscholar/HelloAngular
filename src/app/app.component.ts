import { Component } from '@angular/core';

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
*/  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'ProjectFrontend';

  constructor(){
    console.log("Constructor called");
  }

  get2(){
    return 2;
  }

  names = ['Ime1','Ime2','Ime3','Ime4'];

  showTitle = true;

}
