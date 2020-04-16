


export class Tabla_Simbolos{
private nombre:string; 
private tipo:string;
private fila:number;
private valor:string;

constructor(nom:string , tip:string , fil:number , valo:string){
this.nombre = nom; 
this.tipo = tip; 
this.fila = fil; 
this.valor = valo; 
}

public getTipo():string{
    return this.tipo;
}

public getNombre():string{
    return this.nombre; 
}

public  getFila() :number
{
    return this.fila;
}
public getValor():string{
    return this.valor;
}
public setValor( val: string){
    this.valor = val;
}
public setTipo(tip:string){
    this.tipo = tip; 
}

public setNombre(nom: string){
    this.nombre = nom;
}
public setFila(filaaa:number){
    this.fila = filaaa;
}


public esNueva():boolean{

    return true;
}




}