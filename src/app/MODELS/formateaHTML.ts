

export class formateaHTML{
    private contadorTab:number; 
    private nuevaCadena:string;
    private cadenaVieja:string;
    private cadenajson: string; 
    // para analisis lexico simple 
    private estado:number;
    private aux_lexico:string = "";
    


    // PARA TRADUCIR EL JSON 
    private ID_PURO:boolean= true; 
    private atributo_actual:string = ""; 
    constructor(cadena_html:string){
        this.contadorTab = 0 ; 
        this.nuevaCadena = cadena_html;
        this.cadenaVieja = cadena_html;
        this.ejecuta_formato();
        this.generarJson();
        this.addCOMILLAS_AL_JSON();
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
                            this.aux_lexico += this.cadenaVieja[i]; 
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
                    let atributo:string = this.getAtributo_etiqueta(i);
                   
                    if(atributo[0] == "\""){
                        console.log("si es un atributo");
                        this.atributo_actual = atributo;
                    }else{
                        this.atributo_actual  = ""; 
                    }
                    this.ID_PURO = true;
                    this.contadorTab++;
                    this.t_();   
                    this.cadenajson += this.aux_lexico; // adjunta 

                   // this.aux_lexico = ""; 
                }
                this.aux_lexico =""; // se limpia 


                break;



                case 2: // estoy en la parte interna de la etiqueta 
                if(act == ">" ){
                    // TENGO QUE IMPRIMIR SOLO EL ID 
                  //  console.log("> ENTRA "+ this.aux_lexico);
                    this.cadenajson += this.aux_lexico;
                    this.aux_lexico ="";
                    this.cadenajson+= "\":{\n"
                    if(this.atributo_actual.length != 0 ){
                    this.t_();  this.cadenajson+="\"STYLE\":"+this.atributo_actual+"\n";
                    }
                    this.estado = 0; 
                }else{ // viene el puro id   
                    
                    if(act == " "){
                        this.aux_lexico.trim();
                        if(this.aux_lexico.length != 0 && this.ID_PURO == true ){
                          //  console.log("in if "+ this.aux_lexico);
                            this.cadenajson += this.aux_lexico;
                            this.ID_PURO = false;
                        }
                        this.aux_lexico="";
                    }else if(this.ID_PURO == true){

                        if(act != "\n"){// ESTO NO PODRIA VENIR PERO POR SI ACASO :V 
                         
                              this.aux_lexico+= act;
                        }
                       
                    }     
                     
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
        console.log("ACTUAL: " + this.cadenajson[i]);
        let sig:string = this.cadenajson[i+1];
        while (sig ==" "|| sig =="\n" || sig =="\t" || sig=="\r")
        {
            k++;
            sig = this.cadenajson[i + k];
            console.log("Temp sigueinte:" + sig);
        }
        console.log("siguiente definitivo:" + sig);
        console.log("________________________________________________________________________________");
        return sig;
    }


   
    private getAtributo_etiqueta(x:number): string{
        let char_actual:string;
        let ATRIB:string = ""; 
        for(let i = x ; i < this.cadenaVieja.length ; i++){
            char_actual = this.cadenaVieja[i]; 
            if(char_actual == "="){
                ATRIB="";
            }else if(char_actual == ">"){
                break;
            }
            else{
                ATRIB += char_actual;
            }
        }
        ATRIB = ATRIB.trim();
        if(ATRIB[0] == "\""){
            console.log("RETORNA ATRIBUTO: "+ATRIB);
        }
        return ATRIB; 
    }


    public addCOMILLAS_AL_JSON(){
        let nueva_cadena_json_con_comillas:string="";
        let actual:string = "";
        for(let indice = 0 ; indice < this.cadenajson.length-1 ; indice++){
            actual = this.cadenajson[indice]; 


            if(actual == "}"){
                // CASO 1 
            let sig:any = this.getSig(indice); 
            if(sig == "\""){
                nueva_cadena_json_con_comillas +=actual+",";
            }
            else
            {
                nueva_cadena_json_con_comillas +=actual;
            }


            }else if(actual == "\""){
                // CASO 2 
                let siguiente:any = this.getSig(indice);

                if(siguiente == "\""){
                    nueva_cadena_json_con_comillas +=actual+",";
                }
                else
                {
                    nueva_cadena_json_con_comillas +=actual;
                }


            }else{
                // CASO 3 NO INTERESA SOLO LO ADJUNTO 

                nueva_cadena_json_con_comillas +=actual;
            }
        }



        this.cadenajson = nueva_cadena_json_con_comillas; // HASTA ACA YA ESTAN BIEN LAS COMILLAS DE LAS LLAVES 
    

    }




    private t_():void {
   
        for (let i:number = 0; i < this.contadorTab ; i++)
        {
            this.cadenajson += "\t";
        }
    }
    


}