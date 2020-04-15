
import { Estatico} from './Estatico';// lo importo
export class ErrorLexico{
    public static CONTADOR_ERRORES:number = 1 ;
    private fila:number;
    private tipo:string;// PUEDO USAR LA CLASE ENUM Y AHORRAR  ESCRINIR EL TIPO EN EL ANALIZADOR
    private valor:string;
    private columna:number;
    private id:number;
  
constructor(Valor_error:string){
           this.fila = Estatico.FILAS;
           this.columna = Estatico.COLUMNAS;
            this.valor = Valor_error;
            this.tipo = "ERROR LEXICO";
            this.id = ErrorLexico.CONTADOR_ERRORES;
            ErrorLexico.CONTADOR_ERRORES++;
}

public getID():number{
    return this.id;
}

public getValor():string
{
    return this.valor;
}

public  getTipo_error():string
{
    return this.tipo;
}

public  getFila() :number
{
    return this.fila;
}
public getColumna():number
{
    return this.columna;
}

}