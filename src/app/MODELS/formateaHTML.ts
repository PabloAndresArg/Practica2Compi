
export class formateaHTML{
    private contadorTab:number; 
    private nuevaCadena:string;
    private cadenaVieja:string;
    private cadenajson: string; 
    // para analisis lexico simple 
    private estado:number;
    private aux_lexico:string = "";
    private ListaTokens_Salida : any = []; // simulan mi linkenList

    constructor(cadena_html:string){
        this.contadorTab = 0 ; 
        this.nuevaCadena = cadena_html;
        this.cadenaVieja = cadena_html;
        this.ejecuta_formato();
        this.generarJson();
    }

    public getNuevaCadena():string{
        return this.nuevaCadena;
    }
    public getCADENA_JSON():string{
        return this.cadenajson;
    }

    private ejecuta_formato(){
        console.log("CADENA HTML: " + this.cadenaVieja);
        this.nuevaCadena = ""; // LA LIMPIO 
        this.cadenajson = "";
        this.cadenaVieja += "\n";
        this.estado = 0; // inicia en el estado de inicio 
        this.aux_lexico = ""; // cadena acumuladora de lexema acutual 
        let act:string =""; // caracter actual  o tipo string 
        let posPasado = 0;
        for(let i = 0 ; i < this.cadenaVieja.length ; i++){
            act = this.cadenaVieja[i]; 
            switch(this.estado){
                case 0:
                    if (act =="<")  { 
                        posPasado = i;
                        this.tab(); 
                        this.nuevaCadena += this.aux_lexico;
                        this.aux_lexico ="";
                        this.nuevaCadena += "\n";
                        this.aux_lexico += this.cadenaVieja[i];
                        this.estado = 1; 
                    }else{

                        this.aux_lexico += this.cadenaVieja[i];
                        // de una se adjunta 
                    }
                break;
                case 1: // este estado determina si resto o sumo 
               
    

                if (act =="/" && (posPasado - i == -1) )  {  //"</ "
                   // this.aux_lexico = "";
                    this.aux_lexico += this.cadenaVieja[i];
                    this.estado = 2;
                    this.tab();   
                    this.nuevaCadena += this.aux_lexico; // adjunta 
                    this.contadorTab--;
                   
                }else{
                    this.aux_lexico += this.cadenaVieja[i];
                    this.estado = 2 ; 
                    this.contadorTab++;
                    this.tab();   
                    this.nuevaCadena += this.aux_lexico; // adjunta 

                   // this.aux_lexico = ""; 
                }
                this.aux_lexico =""; // se limpia 
                break;
                case 2: // estoy en la parte interna de la etiqueta 
                if(act == ">" ){
                    this.nuevaCadena += this.cadenaVieja[i];
                    this.nuevaCadena+="\n";
                    this.estado = 0; 
                }else{ // viene el puro id        
                     this.nuevaCadena += this.cadenaVieja[i];
                }
                break;
            

            }
        }
    }

    private generarJson(){
        this.contadorTab = 0 ;
      //  this.nuevaCadena = ""; // LA LIMPIO 
        this.cadenajson = "";
        this.cadenaVieja += "\n";
        this.estado = 0; // inicia en el estado de inicio 
        this.aux_lexico = ""; // cadena acumuladora de lexema acutual 
        let act:string =""; // caracter actual  o tipo string 
        let posPasado = 0;
        for(let i = 0 ; i < this.cadenaVieja.length ; i++){
            act = this.cadenaVieja[i]; 
            switch(this.estado){
                case 0:
                    if (act =="<")  { 
                        posPasado = i;
                        this.t_();
                         this.aux_lexico = this.aux_lexico.trim();
                        if(this.aux_lexico.length > 0 ){
                            this.cadenajson += "\"TEXT\":" +"\"" +this.aux_lexico +"\"";
                        }
                        
                        this.aux_lexico ="";
                        this.cadenajson += "\n";
                        this.aux_lexico += "\"";
                        this.estado = 1; 
                    }else{
                        //if( act != "\n"){
                            this.aux_lexico += this.cadenaVieja[i];
                    //    }
                        
                        // de una se adjunta 
                    }
                break;
                case 1: // este estado determina si resto o sumo 
               
    

                if (act =="/" && (posPasado - i == -1) )  {  //"</ "
                   // this.aux_lexico = "";
                    this.aux_lexico += this.cadenaVieja[i];
                    this.estado = 3;
                    this.t_();   
                    this.cadenajson += "}"; // adjunta 
                    this.contadorTab--;
                   
                }else{
                    this.aux_lexico += this.cadenaVieja[i]; // ES UNA LETRA "A"
                    this.estado = 2 ; 
                    this.contadorTab++;
                    this.t_();   
                    this.cadenajson += this.aux_lexico; // adjunta 

                   // this.aux_lexico = ""; 
                }
                this.aux_lexico =""; // se limpia 
                break;
                case 2: // estoy en la parte interna de la etiqueta 
                if(act == ">" ){
                    this.cadenajson+= "\":{\n"
                    this.estado = 0; 
                }else{ // viene el puro id        
                     this.cadenajson += this.cadenaVieja[i];
                }
                break;

                case 3:

                    if(act == ">" ){
                        this.estado = 0 ; 
                        this.aux_lexico ="";
                        this.nuevaCadena+="\n";
                    }else{         
                         // LOS DESCARTO 
                    }
            
                
                break;

            }
        }
    }

    private tab():void {
   
        for (let i:number = 0; i < this.contadorTab ; i++)
        {
            this.nuevaCadena += "\t";
        }
    }

    // ESTO SERIA PARA PONERLE LAS COMILLAS 

    private getSig(i:number): string{
        console.log("________________________________________________________________________________");
        let k:number = 0 ; 
        console.log("ACTUAL: " + this.cadenaVieja[i]);
        let sig:string = this.cadenaVieja[i+1];
        while (sig ==" "|| sig =="\n")
        {
            k++;
            sig = this.cadenaVieja[i + k];
            console.log("Temp sigueinte:" + sig);
        }
        console.log("siguiente definitivo:" + sig);
        console.log("________________________________________________________________________________");
        return sig;
    }
    
    private t_():void {
   
        for (let i:number = 0; i < this.contadorTab ; i++)
        {
            this.cadenajson += "\t";
        }
    }
    


}