import { Component, OnInit } from '@angular/core';
import {Estatico} from '../../MODELS/Estatico';
@Component({
  selector: 'app-sintactico',
  templateUrl: './sintactico.component.html',
  styleUrls: ['./sintactico.component.css']
})
export class SintacticoComponent implements OnInit {

  
  errores:any = [];
   constructor() {
    this.errores = Estatico.lista_mostrar_errores_sintacticos;
   }

  ngOnInit(): void {
  }

}
