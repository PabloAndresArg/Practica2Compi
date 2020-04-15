export class ErroresSintacticos{
    public static CONT_SINTACTICOS : number = 1;
    private columna:number ; 
    private fila : number ; 
    private error:string;
    private id:number;
    constructor(fila_ : number , columna_:number , error:string , encontro:any){// fil acolumna error
        this.id = ErroresSintacticos.CONT_SINTACTICOS; 
        ErroresSintacticos.CONT_SINTACTICOS++; 
        this.fila = fila_; 
        this.columna = columna_; 
        this.error = "se esperaba  " + error  + "   en lugar de   "+encontro +"   ";
    }
     
    public getID():number{
        return this.id;
    }
    
    public getError():string
    {
        return this.error;
    }
    
    public  getTipo_error():string
    {
        return "Error Sintactico";
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