import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './COMPONENTES/nav/nav.component';
import { LexicoComponent } from './COMPONENTES/lexico/lexico.component';
import { SintacticoComponent } from './COMPONENTES/sintactico/sintactico.component';
import { RegresoComponent } from './COMPONENTES/regreso/regreso.component';

import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LexicoComponent,
    SintacticoComponent,
    RegresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CodemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
