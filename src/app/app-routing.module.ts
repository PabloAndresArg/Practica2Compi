import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavComponent} from  './COMPONENTES/nav/nav.component' ; // siempre importo el compoonente 

const routes: Routes = [
  {path:'' , redirectTo:'login', pathMatch:'full' },


  //{path:'',component:NavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
