import { Component, OnInit ,HostBinding} from '@angular/core';
import { Estatico} from '../../MODELS/Estatico';// lo importo
import { Entrada } from 'src/app/MODELS/Entrada';
import {Token ,Tipo} from '../../MODELS/Token';
import { variable, IfStmt } from '@angular/compiler/src/output/output_ast';
import {An_lexico} from '../../MODELS/An_lexico';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @HostBinding('class') clases = 'row';
  listaTXT : any = []; // lista de text area
  entrada:Entrada = new Entrada(0 , "");
  


  constructor() {
         let entrada:string = ". if else switch case  2 [[{};:] "
         let analizador:An_lexico = new An_lexico(); 
         analizador.analisis_lexico(entrada);
         analizador.imprimir_tokens();
   //  var variable:Token  =  new Token(Tipo.caracter , "Z"); // ASI SE CREA UNA VARIABLE 
 /* let lexico:An_lexico = new An_lexico(); 
   let vector:any = [];
   vector = lexico.getListaTokens();
   console.log(vector[0].getValor_lexema());
  console.log(vector[0].getTipo_str());
  this.listaTXT.push(new Entrada(0,"SOY EL LEXEMA"));
    var tok : Token = new Token(Tipo.caracter , "Z");
    console.log("ID " + tok.getID() );
    console.log("LEXEMA " + tok.getValor_lexema());
    console.log("COLUMNA " + tok.getColumna());
    console.log("FILA " + tok.getFila());
    console.log("TIPO ENUM " + tok.getTipo());
    console.log("TIPO STR " + tok.getTipo_str());
  
  
  */
   }

  
  ngOnInit(): void {
 
  }

  esDigito (caracter){
    let ascii = caracter.charCodeAt(0);
    return ascii > 47 && ascii < 58;
  }
  esLetra(caracter){
    let ascii = caracter.toUpperCase().charCodeAt(0);
    return ascii > 64 && ascii < 91;
  }
  crear_nueva_ventana(){
    alert("creando nueva ventana");
    let llama:An_lexico = new An_lexico(); 
    llama.analisis_lexico("PABLO");
  }

  analizar(){
    this.limpiarVariables();
    console.log(this.entrada.cadena);
    
    // lo envio a mi clase de analizador_lexico 
    // a la clase de mi analizador sintactico 
    // si todo bien traduce sino nel 

  }
  analizar2(cadena:any){
    this.limpiarVariables();
    console.log(cadena);
    // lo envio a mi clase de analizador_lexico 
    // a la clase de mi analizador sintactico 
    // si todo bien traduce sino nel 

  }

  limpiarVariables(){
    Estatico.COLUMNAS = 0;
    Estatico.FILAS = 1;
    Token.CONTADORTOKEN = 1;
  }




    





















}

