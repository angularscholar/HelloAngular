import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DummyModule } from 'src/dummy/dummy.module';

/*
*
* Modules - similar to packages in Java, holding components.
* Every application must have at least on module, so called root module, and optionally one or more feature modules.
* Module is a class decorated with a @NgModule decorator, which can be configured with following options.
*   imports       - attribute specifies the module(s) which are imported into this module
*   declarations  - attribute specifies which components belongs to this module
*   exports       - attribute specifies which components are exported from this module, enabling it to be imported into another modules
*   bootstrap     - attribute defines the main component of the module
*
* Feature modules usually always imports CommonModule
* 
*/  

@NgModule({
  imports: [
    BrowserModule,
    DummyModule
  ],

  declarations: [
    AppComponent
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
