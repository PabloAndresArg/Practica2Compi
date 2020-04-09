import { Estatico} from './Estatico';// lo importo

export enum Tipo {
    sb_mas,
    sb_menos,
    sb_por,
    sb_division,
    parentesis_izq,
    parentesis_derecho,
    llave_izq,
    llave_derecha,
    caracter,
    decimales,
    comentarioLinea,
    comentarioBloques,
    numero,
    cadena,
    igual,
    mayor_que,
    menor_que,
    dosPuntos,
    punto_y_coma,
    corchete_derecho,
    igualComparacion,
    diferente,
    mayor_o_igual,
    menor_o_igual,
    incremento,
    decremento,
    coma,
    id,
    corchete_izquierdo,
    sharp, // FINALIZA 
    p_res_Int,//  comienzan palabras reservadas
    p_res_Float,
    p_res_Char,
    p_res_String,
    p_res_while,//
    p_res_Bool,
    p_res_Class,
    p_res_static, // TAL VEZ YA NO VENGA 
    p_res_void,
    p_res_Main,
    p_res_false,
    p_res_true,
    p_res_if,
    p_res_else,
    p_res_switch,
    p_res_case,
    p_res_break,
    p_res_default,
    p_res_new,
    p_Console,
    p_WriteLine,
    punto,
    p_for,
    P_res_return,
    sb_and,
    sb_or,
    sb_diferente
}
export class Token{ // si falla implementar el '?' 
  public static CONTADORTOKEN : number = 1; // cada vez que le de analizar regresa a 0 
  private id: number; 
  private fila:number;
  private Tipo_token:Tipo;// PUEDO USAR LA CLASE ENUM Y AHORRAR  ESCRINIR EL TIPO EN EL ANALIZADOR
  private valor_lexema: string;
  private columna: number;

  constructor(tipo_: Tipo,valor_:string){
  this.Tipo_token = tipo_;
  this.valor_lexema = valor_; 
  this.id = Token.CONTADORTOKEN;
  Token.CONTADORTOKEN++;
  this.fila = Estatico.FILAS; 
  this.columna = Estatico.COLUMNAS;
  }

  public getID():number{
      return this.id;
  }

  
  public getValor_lexema():string
  {
      return this.valor_lexema;
  }

  public  getTipo():Tipo
  {
      return this.Tipo_token;
  }
  
  public  getFila() :number
  {
      return this.fila;
  }
  public getColumna():number
  {
      return this.columna;
  }


  public  getTipo_str():String
  {
      switch (this.Tipo_token)
      {
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
      case Tipo.p_res_new:
          return "Palabra Reservada new";

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
      case Tipo.sb_diferente:
          return "NEGACION LOGICA";

      default:
              return "NO REGISTRADO";// ME AVISA SI HAY UNO QUE ME FALTO REGISTRAR EN MI CLASE ENUM

      }

  }







  

}
