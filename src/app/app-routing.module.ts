import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NavComponent} from  './COMPONENTES/nav/nav.component' ; // siempre importo el compoonente 
import {LexicoComponent} from './COMPONENTES/lexico/lexico.component';
import {SintacticoComponent} from './COMPONENTES/sintactico/sintactico.component';

const routes: Routes = [
  {path:'' , redirectTo:'principal', pathMatch:'full' },
  {path:'principal' , component: NavComponent } , 
  {path:'lexico' , component:LexicoComponent},
  {path:'sintactico' , component:SintacticoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
