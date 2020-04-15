import { Component, OnInit ,HostBinding} from '@angular/core';
import { Estatico} from '../../MODELS/Estatico';// lo importo
import { Entrada } from 'src/app/MODELS/Entrada';
import {Token ,Tipo} from '../../MODELS/Token';
import { variable, IfStmt } from '@angular/compiler/src/output/output_ast';
import {An_lexico} from '../../MODELS/An_lexico';
import{Router} from '@angular/router';
import {ErrorLexico} from '../../MODELS/ErrorLexico';
import {ErroresSintacticos} from '../../MODELS/ErroresSintacticos';
import { An_sintatico } from 'src/app/MODELS/An_sintactico';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @HostBinding('class') clases = 'row';
  listaTXT : any = []; // lista de text area
  guarda:string  = "";

  public filestring:any = "ESTE TEXTAREA ES SOLO PARA LEER ARCHIVOS , NO MODIFICAR"; 
  file:any; 
  unlocown:any; 
  

  cadena_traducir:Entrada = new Entrada(10,"");
  cadena_html:Entrada = new Entrada(10,"");
  cadena_json:Entrada = new Entrada(10,"");
  guarda_traduccion:string =""; // igual para HTML Y JSON 
  guarda_cadena_html:string = ""; 
  guarda_cadena_json:string="";


  constructor(private router:Router) {
    this.guarda_traduccion = Estatico.guarda_traduccion;
    this.guarda_cadena_html= Estatico.guarda_cadena_html; 
    this.guarda_cadena_json = Estatico.guarda_cadena_json;
    this.llenarListaTxt();    
    this.restablecer();
    this.filestring = Estatico.guarda_entrada;
   }

  
  ngOnInit(): void {

  }

  llenarListaTxt(){

   this.listaTXT = Estatico.listaTXT;
  }

 
  crear_nueva_ventana(){
    alert("creando nueva ventana");
    this.listaTXT.push(new Entrada(2,""));
  }

  analizar(){
    this.limpiarVariables();
    let entrada:string = this.filestring;
    let analizador:An_lexico = new An_lexico(); 
    Estatico.guarda_entrada = entrada;
    analizador.analisis_lexico(entrada);
    Estatico.lista_mostrar_tokens = analizador.getListaTokens();
    Estatico.lista_mostrar_errores_lexicos = analizador.getListaErrores();
    
   

    let sharp:Token  = new Token(Tipo.sharp, "fin_de_entrada");
    let lista_analizar:any[] = analizador.getListaTokens();
    lista_analizar.push(sharp);
    let llama_sintactico:An_sintatico = new An_sintatico(lista_analizar);
    Estatico.lista_mostrar_errores_sintacticos = llama_sintactico.getListaErrores();
    lista_analizar.pop();


    if(analizador.getListaErrores().length == 0 &&  llama_sintactico.getListaErrores().length == 0 ){
      this.traduce(llama_sintactico.getCADENATRADUCIDA());
    }else{
      alert("LA ENTRADA POSEE ERRORES");
      this.guarda_traduccion = "";
      this.cadena_traducir.cadena = "";
    }
   
   
    alert("Analizando...");
    
    // lo envio a mi clase de analizador_lexico 
    // a la clase de mi analizador sintactico 
    // si todo bien traduce sino nel 

  }
  analizar2(cadena:any){
    this.limpiarVariables();
    let analizador:An_lexico = new An_lexico(); 
    analizador.analisis_lexico(cadena);
    Estatico.lista_mostrar_tokens = analizador.getListaTokens();
    Estatico.lista_mostrar_errores_lexicos = analizador.getListaErrores();
    
    let sharp:Token  = new Token(Tipo.sharp, "fin_de_entrada");
    let lista_analizar:any[] = analizador.getListaTokens();
    lista_analizar.push(sharp);
    let llama_sintactico:An_sintatico = new An_sintatico(lista_analizar);
    Estatico.lista_mostrar_errores_sintacticos = llama_sintactico.getListaErrores();
    lista_analizar.pop();

    if(analizador.getListaErrores().length == 0 &&  llama_sintactico.getListaErrores().length == 0 ){
      this.traduce(llama_sintactico.getCADENATRADUCIDA());
    }else{
      alert("LA ENTRADA POSEE ERRORES");
      this.guarda_traduccion = "";
      this.cadena_traducir.cadena = "";
    }
   

    alert("Analizando...");
    // lo envio a mi clase de analizador_lexico 
    // a la clase de mi analizador sintactico 
    // si todo bien traduce sino nel 

  }

  limpiarVariables(){
    Estatico.COLUMNAS = 0;
    Estatico.FILAS = 1;
    Token.CONTADORTOKEN = 1;
    ErrorLexico.CONTADOR_ERRORES = 1;
    ErroresSintacticos.CONT_SINTACTICOS = 1;
  }


  ir_lexico(){
    this.router.navigate(['/lexico']);
    Estatico.listaTXT = this.listaTXT;
    Estatico.guarda_traduccion = this.guarda_traduccion;
  }

  ir_sitactico(){
    this.router.navigate(['/sintactico']);
    Estatico.listaTXT = this.listaTXT;
    Estatico.guarda_traduccion = this.guarda_traduccion;
  }
    
  restablecer(){
    this.cadena_traducir.cadena = this.guarda_traduccion;
    this.cadena_html.cadena = "HTML SIN MODIFICAR"; // DARLES SUS THIS DE CADA CADENA 
    this.cadena_json.cadena = "JSON SIN MODIFICACIONES";
    
  }




  traduce(cadena_del_sintactico:string){
    let t1:string  = "";
    let comentarioBloque:string = "\'" + " " + "\'" + " " + "\'";
    this.guarda_traduccion = cadena_del_sintactico;
    this.cadena_traducir.cadena = cadena_del_sintactico;
  }
  


fileChanged(e) {
  this.file = e.target.files[0];
  this.uploadDocument();
}
uploadDocument(){
let fileReader = new FileReader(); 
fileReader.onload = (e) =>{
  console.log(fileReader.result);
  this.filestring = fileReader.result;
}
fileReader.readAsText(this.file);
}









}

