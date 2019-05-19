import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { DummyModule } from 'src/dummy/dummy.module';
import { SubcomponentComponent } from './subcomponent/subcomponent.component';
import { NotfoundComponent } from './notfound/notfound.component';

/*
* -------------------------------------------------------------
* Modules - similar to packages in Java, holding components.
* Every application must have at least on module, so called root module, and optionally one or more feature modules.
* Module is a class decorated with a @NgModule decorator, which can be configured with following options.
*   imports       - attribute specifies the module(s) which are imported into this module
*   declarations  - attribute specifies which components belongs to this module
*                 - we have to add every component which we plan to use      
*   exports       - attribute specifies which components are exported from this module, enabling it to be imported into another modules
*   bootstrap     - attribute defines the main component of the module
*
* Feature modules usually always imports CommonModule
*
* -------------------------------------------------------------
* Routing - definies which component will be loaded when specific URL is trigerred
* It have to be configured inside the main module.
* All routes defined in Routes array will be accessible from browser, e.g. /subcomponent
* Html from which route will be called must have <router-outlet></router-outlet>
*
* With redirectTo parameter we can redirect URL to another router endpoint where it will be processed accordingly. - e.g. login
*/  

const routes:Routes = [
  {path:"",redirectTo:"subcomponent",pathMatch:"full"},
  {path:"subcomponent",component:SubcomponentComponent},
  {path:"**",component:NotfoundComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    DummyModule
  ],

  declarations: [
    AppComponent,
    SubcomponentComponent,
    NotfoundComponent
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
