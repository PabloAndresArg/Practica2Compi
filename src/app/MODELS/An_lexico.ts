import {Token , Tipo} from'./Token';
import {ErrorLexico} from './ErrorLexico';
export class An_lexico{

    private ListaTokens_Salida : any = []; // simulan mi linkenList
    private ListaErroresLexicos :any = []; 
    private estado:number;
    private aux_lexico:string = "";
    constructor(){
        this.aux_lexico="";
    }


    public imprimir_tokens():void{ // --------------------------- PROBAR SI FUNCIONAAA
        for (const item of this.ListaTokens_Salida) {
             console.log("LEXEMA-> " + item.getValor_lexema() + " TIPO: " + item.getTipo_token() + " Fila " + item.getFila() + " Columna " + item.getColumna());
        }
    }



    public addError(Error:string){
      if(Error != "\n" && Error != "\r"){
        this.ListaErroresLexicos.push(new ErrorLexico(Error));
      }
      this.aux_lexico = "";//LIMIPIA EL ACUMULADOR 
      this.estado = 0; // REINICIA EL ESTADO , implemetar el booleano 

    }


    public addToken(tipoToken: Tipo ){
        this.ListaTokens_Salida.push(new Token(tipoToken, this.aux_lexico));
        this.aux_lexico = "";// LIMPIA LE ACUMULADOR
        this.estado = 0;
    }

    public getListaTokens():any[] {
        return this.ListaTokens_Salida;
    }
    public getListaErrores():any[] {
        return this.ListaErroresLexicos;
    }
}