import {ErroresSintacticos} from './ErroresSintacticos';
import {Token, Tipo} from './Token';
import { ɵConsole } from '@angular/core';
export class An_sintatico{
    private  noTomarLLaves :boolean; 
    private  Traducir:boolean;
    private  salto_de_linea:boolean; 
    private contadorTab:number; 
    private cadena_traducida:string;
    private NO_salto:boolean;
    private lista_errores_sin:any = []; 
    // atributos publicos 
    tokenActual:Token; 
    listaTok:any = [];
    sig :number;  
    // PROPIEDADES--------------
    public getCADENATRADUCIDA():string{
        
        return this.cadena_traducida;
    }
    public getListaErrores():any[]{
        return this.lista_errores_sin; 
    }
    // trabar al metodo cuando haya un error y esperar a que llegue a un punto y coma
    // luego seguir analizando como si  nada 
    constructor(tokens:any[]){
    this.NO_salto = false; 
    this.contadorTab = 0 ; 
    this.noTomarLLaves = false; 
    this.Traducir = false; 
    this.cadena_traducida = ""; 
    this.listaTok = tokens;
    this.sig = 0 ; 
    this.tokenActual = this.listaTok[this.sig];
    // LISTO PARA INICIAR EL SINTACTICO 
    console.log("INICIA A ANALIZAR");
    this.inicio();
    console.log("TERMINO DE ANALIZAR");
 
    }

    private inicio():void{
        this.Traducir = true;
        this.parea(Tipo.p_res_Class);
        this.parea(Tipo.id);
        this.parea(Tipo.llave_izq);
        // lista instrucciones 
        this.Lista_inst();

        this.parea(Tipo.llave_derecha);
    }
    private Lista_inst(){
        this.Instruccion();
        this.Lista_instP();// prima
    }

    private Instruccion(){ // TODAS LAS INSTRUCCIONES QUE PUEDO HACER 
        this.ignoraComentarios(); 
        if(this.tokenActual.getTipo() == Tipo.p_res_if){
            // instruccion IF 
        }

    }
    private Lista_instP(){
        this.ignoraComentarios(); // siempre que voy a ver hacia que produccion ir 
        if(this.tokenActual.getTipo() == Tipo.p_res_if){
            this.Instruccion(); 
            this.Lista_instP();
        }

        // el ELSE ES MI EPSILON 
    }

    // ------------------> EXPRESIONES <----------------------------
    private  expresion() {
        this.E();
        this.simboloComparacionOpcional();
    }
    private E(){ // E-> T() EP
        this.T();
        this.EP();// E PRIMA 

    }
    private T(){
            // T->F TP  = T-> FT'
        this.F();
        this.TP();
    }
    private TP ():void
    {
        this.ignoraComentarios();
        if (this.tokenActual.getTipo() == Tipo.sb_por)
        {
            // TP-> * F TP
            this.parea(Tipo.sb_por);
            this.F();
            this.TP();
        }
        else if (this.tokenActual.getTipo() == Tipo.sb_division)
        {
            // TP-> / F TP
            this.parea(Tipo.sb_division);
            this.F();
            this.TP();
        }
        else
        {
            // TP-> EPSILON
        }
    }
    public  F():void
    {
        this.ignoraComentarios();
        if (this.tokenActual.getTipo() == Tipo.parentesis_izq)
        {
            //F->  (E)
            this.parea(Tipo.parentesis_izq);
            this.E();
            this.parea(Tipo.parentesis_derecho);
        }
        else if (this.tokenActual.getTipo() == Tipo.decimales)
        {
            //F->  NUMERO
            this.parea(Tipo.decimales);
        }
        else if (this.tokenActual.getTipo() == Tipo.cadena)
        {
            //F->  CADENA
            this.parea(Tipo.cadena);
        }
        else if (this.tokenActual.getTipo() == Tipo.id)
        {
            //F->  id
            this.parea(Tipo.id); // me da duda....
        }
        else if (this.tokenActual.getTipo() == Tipo.p_res_true)
        {
            //F->  TRUE
            this.parea(Tipo.p_res_true);
        }
        else if (this.tokenActual.getTipo() == Tipo.p_res_false)
        {
            //F->  FALSE
            this.parea(Tipo.p_res_false);
        }
        else if (this.tokenActual.getTipo() == Tipo.caracter)
        {

            this.parea(Tipo.caracter);
        }
        else 
        {
            //F->  NUMERO  
            this.parea(Tipo.numero);
        }
    }
    private EP(){
        this.ignoraComentarios();
            if (this.tokenActual.getTipo() == Tipo.sb_mas)
            {
                //EP-> + T EP
                this.parea(Tipo.sb_mas);
                this.T();
                this.EP();
            }
            else if (this.tokenActual.getTipo() == Tipo.sb_menos)
            {
                //EP-> - T EP
                this.parea(Tipo.sb_menos);
                this.T();
                this.EP();
            }
            else
            {
                // EP-> EPSILON
            }
    }
    private simboloComparacionOpcional(){
        this.ignoraComentarios();
        if (this.tokenActual.getTipo() == Tipo.igualComparacion)
        {             // simboloComparacionOpcional  -> == E
            this.parea(Tipo.igualComparacion);
            this.E();

        }
        else if (this.tokenActual.getTipo() == Tipo.mayor_que)
        {             // simboloComparacionOpcional  -> > E
            this.parea(Tipo.mayor_que);
            this.E();
        }
        else if (this.tokenActual.getTipo() == Tipo.menor_que)
        {
            this.parea(Tipo.menor_que);
            this.E();
        }
        else if (this.tokenActual.getTipo() == Tipo.menor_o_igual)
        { 
            this.parea(Tipo.menor_o_igual);
            this.E();
        }
        else if (this.tokenActual.getTipo() == Tipo.mayor_o_igual)
        {             // simboloComparacionOpcional  ->   >= E
            this.parea(Tipo.mayor_o_igual);
            this.E();
        }
        else if (this.tokenActual.getTipo() == Tipo.diferente)
        {             // simboloComparacionOpcional  ->   != E
            this.parea(Tipo.diferente);
            this.E();
        }
        else
        {
            // simboloComparacionOpcional  -> -EPSILON
        }
    } 





    private parea(tip : Tipo):void{
    // LLAMAR A IGNORA COMENTARIOS 
    this.ignoraComentarios();
    if(this.tokenActual.getTipo() != tip){
        this.lista_errores_sin.push(new ErroresSintacticos(this.tokenActual.getFila() , this.tokenActual.getColumna() ,this.getTipoParaError(tip)));
        console.log("SE ESPERABA " + this.getTipoParaError(tip));
    }

    if (this.tokenActual.getTipo() != Tipo.sharp) // AGREGAR EL SHARP :v
    {  
            if (this.Traducir) {
          //  ControldeLLaves();// PARA LAS LISTAS ID que llevan , ni tabs
            if (this.tokenActual.getTipo() == Tipo.punto_y_coma && this.NO_salto == false) { // analizar esto 
                this.cadena_traducida = this.cadena_traducida + "\n";
            }
            this.NO_salto = false;

                this.cadena_traducida += this.tokenActual.getValor_lexema();
            }// fin traducir
        this.sig++;
        this.tokenActual = this.listaTok[this.sig];
    }
}

private salto():void{
    // es solo para los primeros de cada instruccion 
    this.cadena_traducida += "\n";
}

private ControldeLLaves():void{ // QUITAR 2 CASOS 
    if (this.tokenActual.getTipo() == Tipo.llave_izq && this.noTomarLLaves == true)
    {
        // no doy tabulaciones  , ni muevo el contador 
        this.cadena_traducida += "[";     // ESTE CASO ERA POR LOS VECTORES
    }
    else if (this.tokenActual.getTipo() == Tipo.llave_derecha && this.noTomarLLaves == true)
    {
        // no doy tabulaciones  , ni muevo el contador 
        this.cadena_traducida += "]";
        this.noTomarLLaves = false;
    }
    else if (this.tokenActual.getTipo() == Tipo.llave_izq)
    {

        this.contadorTab++;
        alert("contador de tabs POR LLAVE + :" + this.contadorTab);


    } else if (this.tokenActual.getTipo() == Tipo.llave_derecha) {
        this.contadorTab--;
        alert("contador de tabs POR LLAVE - en :" + this.contadorTab);
    }
}

private ignoraComentarios():void {
    while (this.tokenActual.getTipo() == Tipo.comentarioBloques || this.tokenActual.getTipo() == Tipo.comentarioLinea)
    {

        if (this.tokenActual.getTipo() == Tipo.comentarioLinea) {
            this.cadena_traducida += "\n";
        }
        this.tab();
        this.cadena_traducida += this.tokenActual.getValor_lexema();
        this.cadena_traducida += "\n";

        this.sig++;
        this.tokenActual = this.listaTok.ElementAt(this.sig);


    }
}

private tab():void {
   
    for (let i:number = 0; i < this.contadorTab ; i++)
    {
        this.cadena_traducida += "\t";
    }
}


private getTipoParaError(tip : Tipo):string{
switch (tip) {
    case Tipo.sb_mas:
        return "mas";
    case Tipo.sb_menos:
        return "menos";
    case Tipo.sb_por:
        return "Por";
    case Tipo.sb_division:
        return "division";
    case Tipo.parentesis_izq:
        return "Parentesis_izquierdo";
    case Tipo.parentesis_derecho:
        return "Parentesis Derecho";
    case Tipo.llave_izq:
        return "LLave_izquierda";
    case Tipo.llave_derecha:
        return "llave_Derecha";
    case Tipo.caracter:
        return "caracter";
    case Tipo.decimales:
        return "Numero Decimal";
    case Tipo.comentarioLinea:
        return "ComentarioLineal";
    case Tipo.comentarioBloques:
        return "ComentarioBloque";
    case Tipo.numero:
        return "Numero_Entero";

    case Tipo.cadena:
        return "cadena";

    case Tipo.igual:
        return "Signo_Igual";
    case Tipo.mayor_que:
        return "MayorQue";

    case Tipo.menor_que:
        return "MenorQue";
    case Tipo.dosPuntos:
        return "Dos_puntos";

    case Tipo.punto_y_coma:
        return "Punto_y_coma";
case Tipo.corchete_derecho:
    return "Corchete Derecho";
case Tipo.igualComparacion:
    return "igual comparacion";
case Tipo.diferente:
    return "diferente de";
case Tipo.mayor_o_igual:
    return "mayor o igual ";
case Tipo.menor_o_igual:
    return "menor o igual ";
case Tipo.incremento:
    return "incremento ";
case Tipo.decremento:
    return "decremento ";
case Tipo.coma:
    return "coma ";
case Tipo.id:
    return "ID ";
case Tipo.corchete_izquierdo:
    return "Corchete izquierdo ";
case Tipo.sharp:
    return  "FINALIZACION";
case Tipo.p_res_Int:
    return "Palabra Reservada Int";
case Tipo.p_res_Float:
    return "Palabra Reservada Float";
case Tipo.p_res_Char:
    return "Palabra Reservada Char";
case Tipo.p_res_String:
    return "Palabra Reservada String";
case Tipo.p_res_while:
    return "Palabra Reservada Int";
case Tipo.p_res_Bool:
    return "Palabra Reservada Bool";
case Tipo.p_res_Class:
    return "Palabra Reservada Class";
case Tipo.p_res_static:
    return "Palabra Reservada static";
case Tipo.p_res_void:
    return "Palabra Reservada void";
case Tipo.p_res_Main:
    return "Palabra Reservada Main";
case Tipo.p_res_false:
    return "Palabra Reservada false";
case Tipo.p_res_true:
    return "Palabra Reservada true";
case Tipo.p_res_if:
    return "Palabra Reservada if";
case Tipo.p_res_else:
    return "Palabra Reservada else";
case Tipo.p_res_switch:
    return "Palabra Reservada switch";
case Tipo.p_res_case:
    return "Palabra Reservada case";
case Tipo.p_res_break:
    return "Palabra Reservada break";
case Tipo.p_res_default:
    return "Palabra Reservada default";
case Tipo.p_res_continue:
    return "Palabra Reservada Continue";

case Tipo.p_Console:
    return "Objeto Console";
case Tipo.p_WriteLine:
    return "Propiedad WriteLine";

case Tipo.punto:
    return "punto";
case Tipo.p_for:
    return "for";
case   Tipo.P_res_return:
     return "Palabra reservada return";
case Tipo.sb_and:
    return "AND LOGICO ";
case Tipo.sb_or:
    return "OR LOGICO ";
case Tipo.sb_negacion:
    return "NEGACION LOGICA";
case Tipo.p_res_do:
    return "Palabra Reservada do";

    default:
        console.log("ERROR NO RECONOCIDO");
        return "ERROR NO RECONOCIDO ";
        break;
}
}











}// FIN CLASE 