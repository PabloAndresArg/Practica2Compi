import { Component, OnInit } from '@angular/core';
import {Estatico} from '../../MODELS/Estatico';
@Component({
  selector: 'app-lexico',
  templateUrl: './lexico.component.html',
  styleUrls: ['./lexico.component.css']
})
export class LexicoComponent implements OnInit {
  
  tokens: any = [];
  errores:any = [];
  constructor() {
    
    this.tokens = Estatico.lista_mostrar_tokens;
    this.errores = Estatico.lista_mostrar_errores_lexicos;
   }

  ngOnInit(): void {
  }

}
