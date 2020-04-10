import {Token , Tipo} from'./Token';
import {ErrorLexico} from './ErrorLexico';
import { Estatico } from './Estatico';
export class An_lexico{

    private ListaTokens_Salida : any = []; // simulan mi linkenList
    private ListaErroresLexicos :any = []; 
    private estado:number;
    private aux_lexico:string = "";
    constructor(){
        this.aux_lexico="";
    }

    public analisis_lexico(cadena_entrada:string ){
        console.log("ANALIZANDO: " + cadena_entrada);
        cadena_entrada += "\n";
        this.estado = 0; // inicia en el estado de inicio 
        this.aux_lexico = ""; // cadena acumuladora de lexema acutual 
        let act:string =""; // caracter actual  o tipo string 

        for (let i = 0; i < cadena_entrada.length; i++) {
            Estatico.COLUMNAS++;
            act = cadena_entrada[i]; 
            console.log(act);
            switch (this.estado)
            {
                case 0: 
                if (act == "\n")
                {
                    Estatico.FILAS++;
                    Estatico.COLUMNAS = 0 ;            
                }else if (act == " " || act == "\t")
                {
                    // solo no lo reconoce como un error
                }else if (act =="+"){ this.aux_lexico += act; this.estado = 5; }
                else if (act =="-") {this.aux_lexico += act; this.estado = 7; }
                else if (act =="*") { this.aux_lexico += act; this.addToken(Tipo.sb_por);}
                else if (act =="/") { this.aux_lexico += act; this.estado = 8; }
                else if (act =="(") { this.aux_lexico += act; this.addToken(Tipo.parentesis_izq);}
                else if (act ==")")  { this.aux_lexico += act; this.addToken(Tipo.parentesis_derecho); }
                else if (act =="{")  { this.aux_lexico += act; this.addToken(Tipo.llave_izq); }
                else if (act =="}")  { this.aux_lexico += act; this.addToken(Tipo.llave_derecha); }
                else if (act =="=")  { this.aux_lexico += act; this.estado = 6; }
                else if (act ==":")  { this.aux_lexico += act; this.addToken(Tipo.dosPuntos); }
                else if (act ==";")  { this.aux_lexico += act; this.addToken(Tipo.punto_y_coma); }
                else if (act ==">")  { this.aux_lexico += act; this.estado = 12; }
                else if (act =="<")  { this.aux_lexico += act; this.estado = 13; }
                else if (act =="[")  {
                    this.aux_lexico += act; 
                    this.addToken(Tipo.corchete_izquierdo);
                 }
                else if (act =="]")  { this.aux_lexico += act; this.addToken(Tipo.corchete_derecho); }
                else if (act =="!")  { this.aux_lexico += act; this.estado = 14; }
                else if (act =="\'"){ this.aux_lexico += act; this.estado = 15; } // VERIFICAR SI FUNCIONA 
                else if (act ==","){ this.aux_lexico += act; this.addToken(Tipo.coma); }
                else if (act ==".") { this.aux_lexico += act; this.addToken(Tipo.punto); }
                else if (this.esDigito(act)) //NUMEROS Y DECIMALES
                { this.aux_lexico += act; this.estado = 1; }
                else if (act== "\"") // cadenas de texto 
                {
                this.aux_lexico += act;
                this.estado = 17;
                }
                else if (this.esLetra(act))// palabras reservadas
                {
                this.aux_lexico += act;
                this.estado = 18;
                }
                else{
                this.aux_lexico += act;
                //  Form1.pintar(inicio, i + 1, "rojo");
                this.addError(this.aux_lexico);
                }

                break; // FIN DEL CASO 0 
                case 1:
                    if (this.esDigito(act))
                    {
                        this.aux_lexico += act;
                        this.estado = 1;
                    } else if (act == "."){
                        this.aux_lexico += act;
                        this.estado = 2;
                    }
                    else
                    {
                        Estatico.COLUMNAS--;
                        this.addToken(Tipo.numero);
                        i--;
                    }
                break;// FIN DEL CASO 1 -- DIGITOS
                case 2:
                        if (this.esDigito(act))
                        {    this.aux_lexico += act;   this.estado = 3;
                        }
                        else if (act=="\n")
                        {   
                            this.addError(this.aux_lexico);    Estatico.FILAS++;    Estatico.COLUMNAS = 0;
                        }
                        else{   this.aux_lexico += act;    this.addError(this.aux_lexico);  }
                break; // FIN CASO 2    
                case 3:
                        if (this.esDigito(act))
                        {
                            this.aux_lexico += act;
                            this.estado = 3;
                        } else if (act == "f") {  // REVISAR O IMPLEMENTAR  ACEPTAR NUM DECIMAL SEGUIDO DE ID 
                            this.addToken(Tipo.decimales);
                        } 
                        else if (act=="\n")
                        {   
                            this.addError(this.aux_lexico);    Estatico.FILAS++;    Estatico.COLUMNAS = 0;
                        }
                        else
                        {
                            this.aux_lexico += act;
                            this.addError(this.aux_lexico);
                        }

                break; // CASO DE LO DECIMALES
                case 4:
                break; // DISPONIBLE PARA USARSE----------------------
                case 5:// INCREMENTO 
                        if (act == "+")
                        { this.aux_lexico += act; this.addToken(Tipo.incremento); }
                        else
                        {Estatico.COLUMNAS--; this.addToken(Tipo.sb_mas); i--;} // regresa a ver que era lo que se topo que no es +

                break;
                case 6://COMPARA IGUAL 
                        if (act == "=")
                        { this.aux_lexico += act; this.addToken(Tipo.igualComparacion);}
                        else
                        {Estatico.COLUMNAS--; this.addToken(Tipo.igual); i--;}
                break;
                case 7:// DECREMENTO 
                        if (act == "-")
                        { this.aux_lexico += act; this.addToken(Tipo.decremento); }
                        else
                        { Estatico.COLUMNAS--; this.addToken(Tipo.sb_menos); i--; }
                break;
                case 8:// comentarios
                        if (act == "/")
                        { this.aux_lexico += act; this.estado = 9; }
                        else if (act == "*")
                        { this.aux_lexico += act; this.estado = 10; }
                        else
                        { Estatico.COLUMNAS--; this.addToken(Tipo.sb_division); i--; }
                        break; // decision de comentarios 
                case 9:
                        if (act == "\n")
                        {
                            this.aux_lexico += act;
                        }
                        else {
                            this.addToken(Tipo.comentarioLinea);
                            Estatico.FILAS++;
                            Estatico.COLUMNAS = 0;
                        }
                break;// FIN COMENTARIOS DE LINEA 
                case 10:// COMENTARIO BLOQUE 
                if (act =="\n")
                {
                   this.aux_lexico += act;
                   Estatico.FILAS++; 
                   Estatico.COLUMNAS = 0 ; 
                }
                else if (act == "*")
                {
                    this.aux_lexico += act;
                    this.estado=11; 
                }
                else if (i == cadena_entrada.length - 1)
                {
                    this.aux_lexico += act; this.addError(this.aux_lexico);
                }
                else
                {
                    this.aux_lexico += act;}
                break;
            case 11:// COMENTARIO BLOQUE 
                if (act == "/" )
                { this.aux_lexico += act; this.addToken(Tipo.comentarioBloques);}
                else if (i == cadena_entrada.length-1)//-----------------------------------------------------------------------------------
                {
                    this.aux_lexico += act; this.addError(this.aux_lexico);
                }
                else
                {
                    this.aux_lexico += act;
                    this.estado = 10;

                }
                break;
            case 12://MAYOR O IGUAL  
                if (act == "=")
                { this.aux_lexico += act; this.addToken(Tipo.mayor_o_igual); }
                else
                {Estatico.COLUMNAS--; this.addToken(Tipo.mayor_que); i--; }
                break;
            case 13://menor O IGUAL  
                if (act == "=")
                { this.aux_lexico += act; this.addToken(Tipo.menor_o_igual); }
                else
                { Estatico.COLUMNAS--;this.addToken(Tipo.menor_que); i--; }
                break;
            case 14://diferente  
                if (act =="=") 
                { this.aux_lexico += act; this.addToken(Tipo.diferente); }
                else
                { Estatico.COLUMNAS--;this.addToken(Tipo.sb_negacion); i--; }
                break;
            case 15:
                if (act == "\n")
                {
                    this.addError(this.aux_lexico); Estatico.FILAS++;Estatico.COLUMNAS = 0;
                }
                else {
                    this.aux_lexico += act; this.estado = 16;
                }
                break;
            case 16:
                if (act == "\'")
               {
                    this.aux_lexico += act; this.addToken(Tipo.caracter);
                }else if  (act == "\n")
                {
                    this.addError(this.aux_lexico);Estatico.FILAS; Estatico.COLUMNAS = 0;
                }
                else
                {
                    this.aux_lexico += act; this.addError(this.aux_lexico);
                }
                break;
            case 17:
                try
                {

                    if(act != "\"")
                    {
                        let act2:any = act;
                        this.aux_lexico += act;
                        if (cadena_entrada.length - 1 == i)
                        {

                            this.addError(this.aux_lexico);
                            alert(" no se encontro comillas de cierre");
                        }
                        if  (act2 == "\n")
                        {
                            Estatico.FILAS++;
                            Estatico.COLUMNAS = 0 ; 
                        }
                    }
                    else if (act== "\"")
                    {
                        this.aux_lexico += act;
                        this.addToken(Tipo.cadena);
                    }
                }
                catch (error)
                {
                    console.log("FALLO EN LAS CADENAS" + error);
                }
                break;

            case 18:
                if(this.esDigito(act) || this.esLetra(act) || act == "_")
                {

                    this.aux_lexico += act;

                }
                else
                {

                    i--;
                    Estatico.COLUMNAS--;


                    if (this.aux_lexico == "int")
                    {
                        
                        this.addToken(Tipo.p_res_Int);

                    }
                    else if (this.aux_lexico =="float")
                    {
                        
                        this.addToken(Tipo.p_res_Float);

                        
                    }
                    else if  (this.aux_lexico =="char" || this.aux_lexico =="Char")
                    {
                        
                        this.addToken(Tipo.p_res_Char);

                    }
                    else if (this.aux_lexico =="String" || this.aux_lexico =="string")   // MAYUSCULA O NO  IMPORTA ? 
                    {
                        
                        this.addToken(Tipo.p_res_String);
                       
                    }
                    else if (this.aux_lexico =="bool") 
                    {
                        
                        this.addToken(Tipo.p_res_Bool);

                    }
                    else if (this.aux_lexico =="class")
                    {
                        
                        this.addToken(Tipo.p_res_Class);

                    }
                   /* else if (aux_lexico.CompareTo("static") == 0)
                    {
                        estado = 0;
                        añadeToken(Token.Tipo.p_res_static);

                    }*/
                    else if (this.aux_lexico =="void")
                    {
                        
                        this.addToken(Tipo.p_res_void);

                    }
                    /*else if (this.aux_lexico=="Main") 
                    {
                        this.estado = 0;
                        this.addToken(Tipo.p_res_Main);

                    }*/
                    else if (this.aux_lexico=="false")
                    {
                        
                        this.addToken(Tipo.p_res_false);

                    }
                    else if (this.aux_lexico=="true") 
                    {
                        
                        this.addToken(Tipo.p_res_true);

                    }
                    else if (this.aux_lexico=="if") 
                    {
                       
                    this.addToken(Tipo.p_res_if);

                    }
                    else if (this.aux_lexico=="for")
                    {
                        
                        this.addToken(Tipo.p_for);

                    }

                    else if (this.aux_lexico=="else")                     {
                      
                        this.addToken(Tipo.p_res_else);

                    }
                    else if (this.aux_lexico=="switch") 
                    {
                        
                        this.addToken(Tipo.p_res_switch);

                    }
                    else if (this.aux_lexico=="case")
                    {
                        
                        this.addToken(Tipo.p_res_case);

                    }
                    else if (this.aux_lexico=="break")
                    {
                       
                        this.addToken(Tipo.p_res_break);

                    }
                    else if (this.aux_lexico=="default") 
                    {
                        
                        this.addToken(Tipo.p_res_default);

                    }
                  /*  else if (aux_lexico.CompareTo("new") == 0)
                    {
                        estado = 0;
                        añadeToken(Token.Tipo.p_res_new);

                    }*/
                    else if (this.aux_lexico=="while") 
                    {
                        this.addToken(Tipo.p_res_while);

                    }
                    else if (this.aux_lexico=="Console")
                    {
                        this.addToken(Tipo.p_Console);
                        // System.Windows.Forms.MessageBox.Show(aux_lexico);
                    }
                    else if (this.aux_lexico=="WriteLine")
                    {
                      //  System.Windows.Forms.MessageBox.Show("entra " + aux_lexico +"   "+act);
                        this.addToken(Tipo.p_WriteLine);

                    }

                    else
                    {
                        // es un id 
                        this.addToken(Tipo.id);

                    }

                }

                break;





            } // FIN DEL SWITCH 
            
        }// FIN DEL FOR 

    }

    

    public imprimir_tokens():void{ // --------------------------- PROBAR SI FUNCIONAAA
        for (let x = 0; x < this.ListaTokens_Salida.length; x++) {
      console.log("LEXEMA-> " + this.ListaTokens_Salida[x].getValor_lexema() + " TIPO: " + this.ListaTokens_Salida[x].getTipo_str() + " Fila " + this.ListaTokens_Salida[x].getFila() + " Columna " + this.ListaTokens_Salida[x].getColumna());
        }
   
      
    }


    public imprimir_Errores():void{ // --------------------------- PROBAR SI FUNCIONAAA
        for (let t = 0; t < this.ListaErroresLexicos.length; t++) {
             console.log("LEXEMA-> " + this.ListaErroresLexicos[t].getValor() + " TIPO: " + this.ListaErroresLexicos[t].getTipo_error() + " Fila " + this.ListaErroresLexicos[t].getFila() + " Columna " + this.ListaErroresLexicos[t].getColumna());
        }
    }

    esDigito (caracter){
        let ascii = caracter.charCodeAt(0);
        return ascii > 47 && ascii < 58;
    }
    esLetra(caracter){
        let ascii = caracter.toUpperCase().charCodeAt(0);
        return ascii > 64 && ascii < 91;
    }

    public addError(Error:string){
      if(Error != "\n" && Error != "\r"){
        this.ListaErroresLexicos.push(new ErrorLexico(Error));
      }
      this.aux_lexico = "";//LIMIPIA EL ACUMULADOR 
      this.estado = 0; // REINICIA EL ESTADO , implemetar el booleano 

    }

    public addToken(tipoToken: Tipo){
        console.log("ENTRA un token");
        this.ListaTokens_Salida.push(new Token(tipoToken, this.aux_lexico));
        this.aux_lexico = "";// LIMPIA LE ACUMULADOR
        this.estado = 0;
    };

    public getListaTokens():any[] {
        return this.ListaTokens_Salida;
    };
    public getListaErrores():any[] {
        return this.ListaErroresLexicos;
    };
}