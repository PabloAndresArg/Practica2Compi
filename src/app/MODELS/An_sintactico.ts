import {ErroresSintacticos} from './ErroresSintacticos';
import {Token, Tipo} from './Token';

export class An_sintatico{
     // variables solo para el parea 
     private hay_error:boolean = false; 
     //--------------------------------
    private  Traducir:boolean;
    private contadorTab:number; 
    private cadena_traducida:string;
    private NO_salto:boolean;
    private lista_errores_sin:any = []; 
    private  tomarLLaves:boolean;
    // PARA SENTENCIAS 
    private acepta_sentencia_break: boolean = false; // VA DAR CLAVO SI LO PONGO ADENTRO DE UN CASE 
    private acepta_sentencia_continue:boolean = false; 
    private acepta_return_funciones:boolean =  false; 
    private acepta_return_metodos:boolean =false;
    private esta_en_el_switch:boolean = false;; 
    // atributos publicos PARA PARSEAR 
    tokenActual:Token; 
    listaTok:any = [];
    sig :number;  
  

    // ATRIBUTOS PARA TRADUCIR 
    nombreVar:string  = "";
    esElMain:boolean = false;
    private guardarIntervalo:number = 0; 
    private intervalo1:any = 0; 
    private intervalo2:any = 0;
    private simboloComparativoFor:string = "";
    private viene_de_sentencia_imprimir:boolean = false; // IMPLEMENTAR PARA LA ,    HACER SWTICH Y DECLARACIONSE , FOR DE UNA FUNCION A OTRA 
    private al_menos_una_cadena:boolean = false;
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
    this.Traducir = false; 
    this.cadena_traducida = ""; 
    this.listaTok = tokens;
    this.sig = 0 ; 
    this.tokenActual = this.listaTok[this.sig];
    //tokenActual = listaTok.ElementAt(sig);
    this.tomarLLaves = false;
    // LISTO PARA INICIAR EL SINTACTICO 
    console.log("INICIA A ANALIZAR");

    this.inicio();

    console.log("TERMINO DE ANALIZAR");
    if(this.lista_errores_sin.length === 0){
        console.log("ENTRADA ESTRICTAMENTE ACEPTADA");
    }else{
        console.log("ESA ONDA TIENE ERROES SINTACTICOS");
    }
 
    }

    private inicio():void{
        this.sentencia_clase();
        this.lista_clasesP();
        this.parea(Tipo.sharp);
    }
    private lista_clasesP(){
        if(this.tokenActual.getTipo() == Tipo.p_res_Class){
            this.sentencia_clase();
            this.lista_clasesP();
        }else{

        }
     
    }
    private sentencia_clase(){

        this.parea(Tipo.p_res_Class);
        this.parea(Tipo.id);
        this.parea(Tipo.llave_izq);this.tomarLLaves= true;
        this.Traducir = true;
        this.Lista_inst();
        this.Traducir = false;this.tomarLLaves= false;
        this.parea(Tipo.llave_derecha);

    }
    private Lista_inst(){
        this.Instruccion();
        this.Lista_instP();// prima , solol pregunta si hay mas instrucciones 
    }

    //----------------------------->>>>>>>>>>>>>> INIT INSTRUCCIONES 

    private Instruccion(){ // TODAS LAS INSTRUCCIONES QUE PUEDO HACER 
       
        this.ignoraComentarios(); 

        if(this.tokenActual.getTipo() == Tipo.p_res_if){
            // instruccion IF 
            this.tab(); 
            this.sentencia_if();
        }else if(this.tokenActual.getTipo() == Tipo.p_Console){
            this.tab(); 
            this.sentenciaImprime();
        }else if(this.tokenActual.getTipo() == Tipo.id ){
            this.tab(); 
            this.asignacionSimple();
        }else if(this.tokenActual.getTipo() == Tipo.p_res_Int || this.tokenActual.getTipo() == Tipo.p_res_double  || this.tokenActual.getTipo() == Tipo.p_res_Char || this.tokenActual.getTipo() == Tipo.p_res_String  || this.tokenActual.getTipo() == Tipo.p_res_Bool || this.tokenActual.getTipo() == Tipo.p_res_void){
            this.tab(); 
            this.Declaracion();
        }else if(this.tokenActual.getTipo() == Tipo.p_res_while){
            this.tab();
            this.sentencia_while();
        }else if(this.tokenActual.getTipo() == Tipo.p_res_do){
            this.tab();
            this.sentencia_do_while();
        }else if(this.tokenActual.getTipo() == Tipo.p_for){
           this.tab(); 
           this.sentencia_for();
        }else if(this.tokenActual.getTipo() == Tipo.p_res_switch){
           this.tab();
           this.sentencia_switch();
        }else if(this.tokenActual.getTipo() == Tipo.P_res_return && this.acepta_return_metodos == true){
            this.tab();
            this.sentencia_return_metodos();
        }else if(this.tokenActual.getTipo() == Tipo.P_res_return && this.acepta_return_funciones == true){
            this.tab();
            this.sentencia_return_funciones();
        }else if(this.tokenActual.getTipo() == Tipo.p_res_continue && this.acepta_sentencia_continue == true){
            this.tab(); 
            this.sentencia_continue();
        }else if(this.tokenActual.getTipo() == Tipo.p_res_break && this.esta_en_el_switch == false && this.acepta_sentencia_break == true){
            this.tab();
            this.sentencia_break();
        }
        else{
            // epsilon 
        }

    }
    
    private Lista_instP(){
        this.ignoraComentarios(); // siempre que voy a ver hacia que produccion ir 
        if(this.tokenActual.getTipo() == Tipo.p_res_if){
            this.Instruccion(); 
            this.Lista_instP();
        }else if(this.tokenActual.getTipo() == Tipo.p_Console){
            this.Instruccion(); 
            this.Lista_instP(); 
        }else if(this.tokenActual.getTipo() == Tipo.id ){
            this.Instruccion();
            this.Lista_instP();
        }else if(this.tokenActual.getTipo() == Tipo.p_res_Int || this.tokenActual.getTipo() == Tipo.p_res_double  || this.tokenActual.getTipo() == Tipo.p_res_Char || this.tokenActual.getTipo() == Tipo.p_res_String  || this.tokenActual.getTipo() == Tipo.p_res_Bool || this.tokenActual.getTipo() == Tipo.p_res_void){
            this.Instruccion();
            this.Lista_instP();  
        }else if(this.tokenActual.getTipo() == Tipo.p_res_while){
            this.Instruccion();
            this.Lista_instP();
        }else if(this.tokenActual.getTipo() == Tipo.p_res_do){
            this.Instruccion();
            this.Lista_instP();
        }else if(this.tokenActual.getTipo() == Tipo.p_for){
            this.Instruccion();
            this.Lista_instP();
        }else if(this.tokenActual.getTipo() == Tipo.p_res_switch){
            this.Instruccion();
            this.Lista_instP();
        }else if(this.tokenActual.getTipo() == Tipo.P_res_return && this.acepta_return_metodos == true){
           this.Instruccion(); 
           this.Lista_instP();
        }else if(this.tokenActual.getTipo() == Tipo.P_res_return && this.acepta_return_funciones == true){
            this.Instruccion(); 
            this.Lista_instP();
        }else if(this.tokenActual.getTipo() == Tipo.p_res_continue && this.acepta_sentencia_continue == true){
            this.Instruccion(); 
            this.Lista_instP();
        }else if(this.tokenActual.getTipo() == Tipo.p_res_break && this.esta_en_el_switch == false && this.acepta_sentencia_break == true){
            this.Instruccion(); 
            this.Lista_instP();
        }


        // el ELSE ES MI EPSILON 
    }

    //--------------------> INSTRUCCIONES FIN  <---------------------
    private sentencia_switch():void{
        this.esta_en_el_switch = true;
        this.parea(Tipo.p_res_switch);
        this.parea(Tipo.parentesis_izq); 
        this.parea(Tipo.id);
        this.parea(Tipo.parentesis_derecho);
        this.parea(Tipo.llave_izq); 
        this.ListaCases();  // PREGUNTAR SI EL RETURN FUNCIONARIA EN VEZ DE UN BREAK
        this.Default_();
        this.parea(Tipo.llave_derecha);
        this.esta_en_el_switch = false;
    }
    private Default_(){
        this.ignoraComentarios(); // SIEMPRE PARA PREGUNTAR A DONDE IR 
        if (this.tokenActual.getTipo() == Tipo.p_res_default)
        {
            this.tab();
            this.parea(Tipo.p_res_default);
            this.parea(Tipo.dosPuntos); this.salto();
            this.Lista_inst();
            this.tab();
            this.parea(Tipo.p_res_break);
            this.parea(Tipo.punto_y_coma);
        }
        else {
            // epsilón :v
        }

    }
    private ListaCases(){
        this.caseP();
        this.ListaCasesP();
    }
    private  ListaCasesP() {
        this.ignoraComentarios();
        if (this.tokenActual.getTipo() == Tipo.p_res_case)
        {
            this.caseP();
            this.ListaCasesP();
        }
        else
        {
            // epsilon -----
        }


    }
    private caseP(){
        this.tab();
        this.parea(Tipo.p_res_case); 
        this.opcionCase(); 
        this.parea(Tipo.dosPuntos); this.salto();

        this.contadorTab++;
        this.Lista_inst();
        this.contadorTab--; //------->
        this.tab();
        this.parea(Tipo.p_res_break);
        this.parea(Tipo.punto_y_coma);
    }
    private  opcionCase() {
        this.ignoraComentarios();
        
        if (this.tokenActual.getTipo() == Tipo.numero) {
            this.parea(Tipo.numero);
        } else if (this.tokenActual.getTipo() == Tipo.cadena) {
            this.parea(Tipo.cadena);
        } else if(this.tokenActual.getTipo() == Tipo.id){
            this.parea(Tipo.id);
        }
        else {
            this.parea(Tipo.caracter); // cae un error si no es un caracter acá
        }
    }
    private sentencia_for():void{ this.acepta_sentencia_continue = true;  this.acepta_sentencia_break =true ;
    this.parea(Tipo.p_for);this.Traducir= false;
    this.parea(Tipo.parentesis_izq);
    this.declaracionFOR();this.NO_salto =true;
    this.parea(Tipo.punto_y_coma);// PUNTO Y COMA DONDE NO DEBE HACER SALTO 
    this.lista_expresiones_condicionales();this.definirRango_for();
    this.parea(Tipo.punto_y_coma);// PUNTO Y COMA DONDE NO DEBE HACER SALTO 
    this.parea(Tipo.id);this.NO_salto =false;
    this.DecrementoIncremento();
    this.parea(Tipo.parentesis_derecho);
    this.ListaIns_entreLLaves(); 
    this.acepta_sentencia_continue = false; this.acepta_sentencia_break =false ; this.guardarIntervalo = 0;
    }
    private declaracionFOR(){
        this.ignoraComentarios(); // VA SIEMPRE ANTES DE PREGUNTAR A DONDE MOVERME 
        if(this.tokenActual.getTipo() == Tipo.id){this.Traducir = true;this.cadena_traducida += " ";
            this.parea(Tipo.id);
            this.cadena_traducida+= " in range(" ;this.Traducir= false;
            this.parea(Tipo.igual);this.guardarIntervalo = 1 ; 
            this.expresion();
           // this.cadena_traducida+=this.intervalo1 +",";
        }else{
            this.Tipo(); this.Traducir = true; this.cadena_traducida += " ";
            this.parea(Tipo.id);
            this.cadena_traducida+= " in range(" ;this.Traducir= false;
            this.parea(Tipo.igual); this.guardarIntervalo = 1 ; 
            this.expresion(); 
            // this.cadena_traducida+=this.intervalo1 +",";
        }
    }
    private DecrementoIncremento(){
        this.ignoraComentarios();
        if(this.tokenActual.getTipo() == Tipo.decremento){
            this.parea(Tipo.decremento);
        }else{
            this.parea(Tipo.incremento);
        }
    }
    private sentencia_do_while():void{this.acepta_sentencia_continue = true; this.acepta_sentencia_break =true ; this.Traducir = false; 
        this.cadena_traducida+="while True:";
        this.parea(Tipo.p_res_do);this.Traducir = true;
        this.ListaIns_entreLLaves();
        this.Traducir = false;
        this.parea(Tipo.p_res_while);this.tab(); this.cadena_traducida+="if "; this.Traducir = true;
        this.parea(Tipo.parentesis_izq);
        this.lista_expresiones_condicionales(); 
        this.parea(Tipo.parentesis_derecho);this.cadena_traducida+=":\n";this.tab(); this.cadena_traducida+="\tbreak\n" 
        this.parea(Tipo.punto_y_coma);this.acepta_sentencia_continue = false;this.acepta_sentencia_break = false;
    }
    private sentencia_while():void{ this.acepta_sentencia_continue = true; this.acepta_sentencia_break = true ;
        this.parea(Tipo.p_res_while);
        this.parea(Tipo.parentesis_izq);
        this.lista_expresiones_condicionales();
        this.parea(Tipo.parentesis_derecho);
        this.ListaIns_entreLLaves();
        this.acepta_sentencia_continue = false;  this.acepta_sentencia_break = false ;
    }

    private Declaracion(){
        this.ignoraComentarios();
        this.Traducir = false;
        if(this.tokenActual.getTipo() == Tipo.p_res_void){
            
          this.parea(Tipo.p_res_void);this.Traducir = true;this.acepta_return_metodos = true; 
           this.cadena_traducida += "def ";
            if(this.tokenActual.getValor_lexema() == "main"){
                this.esElMain = true;
            }
            this.parea(Tipo.id);
            this.parea(Tipo.parentesis_izq);
            this.opcionMetodoFuncion();
        }else{
            this.Tipo(); 
            this.nombreVar = this.tokenActual.getTipo_str();
            this.Traducir = false;
            this.parea(Tipo.id);
            this.Traducir = true;
            this.DeclaracionP();
        }
    }
    private opcionMetodoFuncion(){
        this.ignoraComentarios();
        if(this.tokenActual.getTipo() == Tipo.parentesis_derecho || this.esElMain == true){
            this.parea(Tipo.parentesis_derecho); this.cadena_traducida += ":";
            this.ListaIns_entreLLaves();
            this.acepta_return_metodos = false;
             this.acepta_return_funciones = false; 
             this.esElMain = false;
        }else{
            this.Tipo(); 
            this.parea(Tipo.id);
            this.lista_parametros(); 
            this.parea(Tipo.parentesis_derecho);this.cadena_traducida += ":";
            this.ListaIns_entreLLaves();this.acepta_return_metodos = false;
            this.acepta_return_funciones = false;  
            this.esElMain = false;  
        }
    }
    private ListaIns_entreLLaves(){
      
        this.parea(Tipo.llave_izq);
        this.Lista_inst();
        this.Traducir= false;
        if(this.esElMain == true){
            this.cadena_traducida +="\n";
            this.tab();
            this.cadena_traducida += "if_name_ = \"_main_\": \n";
            this.tab(); 
            this.cadena_traducida+="\tmain()\n";
        }
        this.parea(Tipo.llave_derecha);
       this.Traducir = true;
    }
    private DeclaracionP(){
        this.ignoraComentarios();
        if(this.tokenActual.getTipo() == Tipo.parentesis_izq){
            this.cadena_traducida+="def "+ this.nombreVar;
            this.parea(Tipo.parentesis_izq);this.acepta_return_funciones = true;
            this.opcionMetodoFuncion();
        }else{
            this.cadena_traducida += this.nombreVar;
             this.Lista_ids();
             this.asignacion();
             this.parea(Tipo.punto_y_coma);
        }
    }
    private Lista_ids(){
        this.ignoraComentarios();
        if(this.tokenActual.getTipo() == Tipo.coma ){
            this.parea(Tipo.coma);
            this.parea(Tipo.id);
            this.Lista_ids();

        }else{
            // EPSILON 
        }
       
    }
    private asignacion(){
        this.ignoraComentarios();
        if(this.tokenActual.getTipo() == Tipo.igual){
            this.parea(Tipo.igual);
            this.expresion();
        }else{
            // epsilon 
        }
    }
    private asignacionSimple():void{
        this.parea(Tipo.id);
        this.OpcionAsignacion();
    }
    private OpcionAsignacion(){
        this.ignoraComentarios();
        if(this.tokenActual.getTipo() == Tipo.parentesis_izq){
         // CASO DE LLAMANDO METODO 
         this.parea(Tipo.parentesis_izq);
         this.sentencia_llama_metodo(); 
         this.parea(Tipo.punto_y_coma); // this.salto();
        }else{
            
           this.parea(Tipo.igual);
          
           this.expresion();
           this.parea(Tipo.punto_y_coma);// this.salto();
        }
    }
    private ListaExpresiones(){
        this.expresion();
       this.ListaExpresionesP();
    }
    private ListaExpresionesP(){
        this.ignoraComentarios();
        if(this.tokenActual.getTipo() == Tipo.coma){
            this.parea(Tipo.coma);
            this.expresion();
            this.ListaExpresionesP();
        }else{
            // epsilon 
        }
    }
    private sentencia_llama_metodo(){
        this.ignoraComentarios();
        if(this.tokenActual.getTipo() == Tipo.parentesis_derecho){     
            this.parea(Tipo.parentesis_derecho);
        }else{
             this.ListaExpresiones();
             this.parea(Tipo.parentesis_derecho);
        }
    }
    private  lista_parametros(){
        this.ignoraComentarios();
        if(this.tokenActual.getTipo() == Tipo.coma){
            this.parea(Tipo.coma);
            this.Tipo(); 
            this.parea(Tipo.id);
            this.lista_parametros();
        }else{
            // epsilon 
        }

    }
    private Tipo(){
        this.ignoraComentarios();
        this.Traducir = false; 
        if(this.tokenActual.getTipo() == Tipo.p_res_Int){
            this.parea(Tipo.p_res_Int);
        }else if( this.tokenActual.getTipo() == Tipo.p_res_double ){
            this.parea(Tipo.p_res_double);
        }else if ( this.tokenActual.getTipo() == Tipo.p_res_Char){
            this.parea(Tipo.p_res_Char);
        }else if(this.tokenActual.getTipo() == Tipo.p_res_String){
            this.parea(Tipo.p_res_String);
        }else{
            this.parea(Tipo.p_res_Bool);
        }
        this.Traducir = true;
    }
   
    private sentenciaImprime():void{
        this.Traducir = false;this.viene_de_sentencia_imprimir = true;
        this.cadena_traducida += "print";
        this.parea(Tipo.p_Console);
        this.parea(Tipo.punto);
        this.parea(Tipo.p_Write);this.al_menos_una_cadena = false;
        this.Traducir = true;
        this.parea(Tipo.parentesis_izq);
        this.expresion();
        this.parea(Tipo.parentesis_derecho);
        this.parea(Tipo.punto_y_coma);this.viene_de_sentencia_imprimir = false; this.al_menos_una_cadena = true;
    }
        
    
    private sentencia_if(){
        this.parea(Tipo.p_res_if);this.cadena_traducida+=" ";this.Traducir = false;
        this.parea(Tipo.parentesis_izq);this.Traducir = true;
        this.lista_expresiones_condicionales();this.Traducir = false;
        this.parea(Tipo.parentesis_derecho); this.Traducir = true; this.cadena_traducida +=":";this.Traducir = false;
        this.parea(Tipo.llave_izq); this.Traducir = true; //this.salto();
        this.Lista_inst(); this.Traducir = false;
        this.parea(Tipo.llave_derecha);this.Traducir = true; //this.salto();
        this.elseP();
    }
    private elseP(){
        this.tab(); this.ignoraComentarios();

        if (this.tokenActual.getTipo() == Tipo.p_res_else) {
            this.Traducir = false;
            this.parea(Tipo.p_res_else);
            this.Traducir= true; 
            this.multiplesIf();
        } else { 
            // EPSILON 
        }
       
    }
    private multiplesIf(){
        this.ignoraComentarios();
        if(this.tokenActual.getTipo() == Tipo.llave_izq){
            this.cadena_traducida+="else"; this.Traducir = false;
            this.parea(Tipo.llave_izq);  this.Traducir= true; //this.salto();
            this.Lista_inst();this.Traducir = false;
            this.parea(Tipo.llave_derecha); this.Traducir = true; //this.salto();
        }else{

            this.sentencia_elif();
        }
    }
    private sentencia_elif(){
        this.Traducir = false; this.cadena_traducida +="elif";
        this.parea(Tipo.p_res_if);this.cadena_traducida+=" ";this.Traducir = false;
        this.parea(Tipo.parentesis_izq);this.Traducir = true;
        this.lista_expresiones_condicionales();this.Traducir = false;
        this.parea(Tipo.parentesis_derecho); this.Traducir = true; this.cadena_traducida +=":";this.Traducir = false;
        this.parea(Tipo.llave_izq); this.Traducir = true; //this.salto();
        this.Lista_inst(); this.Traducir = false;
        this.parea(Tipo.llave_derecha); this.Traducir = true;//this.salto();
        this.elseP();        
    }
    private sentencia_return_funciones(){
        this.parea(Tipo.P_res_return);this.cadena_traducida+=" ";
        this.lista_expresiones_condicionales(); 
        this.parea(Tipo.punto_y_coma); 
    }
    private sentencia_return_metodos(){
        this.parea(Tipo.P_res_return);
        this.parea(Tipo.punto_y_coma); 
    }
    private sentencia_continue(){
        this.parea(Tipo.p_res_continue);
        this.parea(Tipo.punto_y_coma);
    }
    private sentencia_break(){
        this.parea(Tipo.p_res_break);
        this.parea(Tipo.punto_y_coma);
    }

    private lista_expresiones_condicionales(){
        this.guardarIntervalo= 2;this.guardaIntervalorFor(this.tokenActual.getValor_lexema());
        this.expresion(); this.guardarIntervalo =0;
        this.lista_expresiones_condicionalesP();
    }

    private lista_expresiones_condicionalesP(){
        this.ignoraComentarios();
       if(this.tokenActual.getTipo() == Tipo.sb_and){ this.cadena_traducida+=" and ";this.Traducir = false;
        this.parea(Tipo.sb_and);this.Traducir = true;
        this.expresion(); 
        this.lista_expresiones_condicionalesP();
       }else if(this.tokenActual.getTipo() == Tipo.sb_or){this.cadena_traducida+=" or ";this.Traducir = false;
        this.parea(Tipo.sb_or);this.Traducir = true;
        this.expresion(); 
        this.lista_expresiones_condicionalesP();
       }else{
           // epsilon 
       }
    }
    
    // ------------------> EXPRESIONES <----------------------------
    private expresionMetodo(){
        this.ignoraComentarios();
        if(this.tokenActual.getTipo() == Tipo.parentesis_izq){
            this.parea(Tipo.parentesis_izq);
            this.sentencia_llama_metodo(); 
          
        }else{
            // EPSILON 
        }
    }
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
    private guardaIntervalorFor(loqueVenga:any){
        if(this.guardarIntervalo == 1){
            this.intervalo1 = loqueVenga;
        }else if(this.guardarIntervalo == 2){
            this.intervalo2 = loqueVenga;
        }
    }
    public  F():void
    {
        this.ignoraComentarios(); 
  
       if(this.tokenActual.getTipo() == Tipo.numero){
        this.guardaIntervalorFor(this.tokenActual.getValor_lexema());
       }

        if (this.tokenActual.getTipo() == Tipo.decimales)
        {
            //F->  NUMERO
            this.parea(Tipo.decimales);
        }
        else if (this.tokenActual.getTipo() == Tipo.parentesis_izq)
        {
            //F->  (E)
            this.parea(Tipo.parentesis_izq);
            this.expresion();
            this.parea(Tipo.parentesis_derecho);
        }
        
        else if (this.tokenActual.getTipo() == Tipo.cadena)
        {
            //F->  CADENA
            this.al_menos_una_cadena = true;
            this.parea(Tipo.cadena);
        }
        else if (this.tokenActual.getTipo() == Tipo.id)
        {
            //F->  id
            this.parea(Tipo.id);
            this.expresionMetodo();
        }
        else if (this.tokenActual.getTipo() == Tipo.p_res_true)
        {
            //F->  TRUE
            this.Traducir = false; this.cadena_traducida+="True";
            this.parea(Tipo.p_res_true);
            this.Traducir= true;
        }
        else if (this.tokenActual.getTipo() == Tipo.p_res_false)
        {
            //F->  FALSE
            this.Traducir = false; this.cadena_traducida+="False";
            this.parea(Tipo.p_res_false);
            this.Traducir= true;
        }
        else if (this.tokenActual.getTipo() == Tipo.caracter)
        {
            // caracter 
            this.parea(Tipo.caracter);
        }
        else if(this.tokenActual.getTipo() == Tipo.sb_negacion){
            this.Traducir= false;
            this.parea(Tipo.sb_negacion);this.cadena_traducida +=" not "; this.Traducir= true;
            this.E();
        }
        else 
        {
            // EXCEPTION  
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

    public definirRango_for(){ // numero , numero): saLTO DE LINEA
        if(this.simboloComparativoFor == ">="){
            // quiere decir que el primero es mas pequeño 
            let num:number = parseInt( this.intervalo1)+1;
            let num2:number = parseInt( this.intervalo2) + 1;
            this.cadena_traducida+=num2+","+num+"):\n";
        }else if (this.simboloComparativoFor == "<="){
            let num:number = parseInt( this.intervalo1) + 1;
            let num2:number = parseInt( this.intervalo2) + 1;
            this.cadena_traducida+=num +","+num2+"):\n";
        }else if (this.simboloComparativoFor == "<"){
            let num:number = parseInt( this.intervalo1) + 1;
            this.cadena_traducida+= num+","+ this.intervalo2+"):\n";
        }else if (this.simboloComparativoFor == ">"){
            let num2:number = parseInt( this.intervalo2) + 1;
            this.cadena_traducida+=num2+","+this.intervalo1+"):\n";
        }
    }

    private simboloComparacionOpcional(){
        this.ignoraComentarios();
        // PARA TRAUDCIR
        if(this.guardarIntervalo == 2){
           this.simboloComparativoFor = this.tokenActual.getValor_lexema();
        }    
        //----
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
    if(this.hay_error == false){
        this.lista_errores_sin.push(new ErroresSintacticos(this.tokenActual.getFila() , this.tokenActual.getColumna() ,this.getTipoParaError(tip), this.tokenActual.getTipo_str() ));
        console.log("se activo un error en la fila " + this.tokenActual.getFila() + "SE ESPERABA " + this.getTipoParaError(tip) + "en lugar de "+ this.tokenActual.getTipo_str() );
        this.hay_error = true;
    }
    }
            
    if((this.hay_error == true && this.tokenActual.getTipo() == Tipo.punto_y_coma && tip == Tipo.punto_y_coma) || (this.hay_error == true && this.tokenActual.getTipo() == Tipo.llave_derecha && tip == Tipo.llave_derecha) ){// truncamiento de fin de 
        this.hay_error = false;
        console.log("COMIENZA A ANALIZAR NORMAL a partir de la fila :  " + this.tokenActual.getFila());
    }

    if (this.tokenActual.getTipo() != Tipo.sharp) // AGREGAR EL SHARP 
    {  
        if(this.tomarLLaves){   
            this.ControldeLLaves();
        }

        if((this.tokenActual.getTipo() == Tipo.punto_y_coma|| this.tokenActual.getTipo() == Tipo.llave_derecha || this.tokenActual.getTipo() == Tipo.llave_izq) && this.NO_salto == false){
            this.cadena_traducida = this.cadena_traducida + "\n";
        }
 
            if (this.Traducir) {
            if(this.tokenActual.getTipo() != Tipo.punto_y_coma && this.tokenActual.getTipo() != Tipo.llave_izq && this.tokenActual.getTipo() != Tipo.llave_derecha){
                // si viene un switcher si le agrego LAS LLAVES  
                if(this.viene_de_sentencia_imprimir == true && this.al_menos_una_cadena == true && this.tokenActual.getTipo() == Tipo.sb_mas){
                    this.cadena_traducida+=",";
                }else{
                    this.cadena_traducida += this.tokenActual.getValor_lexema();
                } 
            }    
            }// fin traducir
         
        if(this.hay_error){
            // CUANDO DEJO DE CAMBIAR DE TOKENS , debo desechar hasta llegar a punto y coma o llave de cierre
            if(this.tokenActual.getTipo() != Tipo.punto_y_coma && this.tokenActual.getTipo() != Tipo.llave_derecha ){
            this.sig++;
            this.tokenActual = this.listaTok[this.sig];
            }   
          
        }else{
            this.sig++;
            this.tokenActual = this.listaTok[this.sig];
        }
    
    }
}

private salto():void{
    // es solo para los primeros de cada instruccion 
    this.cadena_traducida += "\n";
}

private ControldeLLaves():void{ // QUITAR 2 CASOS 

    if (this.tokenActual.getTipo() == Tipo.llave_izq)
    {

        this.contadorTab++;
       //alert("contador de tabs POR LLAVE + :" + this.contadorTab  +"  en linea: " +this.tokenActual.getFila());


    } else if (this.tokenActual.getTipo() == Tipo.llave_derecha) {
        this.contadorTab--;
      //alert("contador de tabs POR LLAVE - en :" + this.contadorTab+"  en linea: " +this.tokenActual.getFila());
    }
}

private ignoraComentarios():void {
    while (this.tokenActual.getTipo() == Tipo.comentarioBloques || this.tokenActual.getTipo() == Tipo.comentarioLinea)
    {
// para traudcir una de bloque puedo jalar elemento por elemento y ver si puedo hacer algo de tab cuando venga salto de linea 

        if (this.tokenActual.getTipo() == Tipo.comentarioLinea) {
        let cadena:string = this.tokenActual.getValor_lexema();
        let traducida_comLinea:string  = "#"; 
        for (let I = 2; I < cadena.length; I++) {
            traducida_comLinea += cadena[I];
        }
        this.tab();
        this.cadena_traducida += traducida_comLinea;
        this.cadena_traducida += "\n";
        }else if(this.tokenActual.getTipo() == Tipo.comentarioBloques){
       this.tab();
        let cadena:string = this.tokenActual.getValor_lexema();
        let traducida_comBlock:string =""; 
        traducida_comBlock+=  "\'" + "" + "\'" + "" + "\'";
        for (let X = 3; X < cadena.length -2; X++) {
            traducida_comBlock += cadena[X];
            if(cadena[X] == "\n"){
                console.log("SALTA en " + cadena[X-2]);              
                this.tab();
            }
        }
        traducida_comBlock+=  "\'" + "" + "\'" + "" + "\'";
        this.cadena_traducida+=traducida_comBlock;
        this.cadena_traducida += "\n";
        }
        this.sig++;
        this.tokenActual = this.listaTok[this.sig];


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
    return "TIPO DE DATO";
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
case Tipo.p_Write:
    return "Propiedad Write";

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
case Tipo.p_res_double:
    return"Palabra Reservada double";

    default:
        console.log("ERROR NO RECONOCIDO");
        return "ERROR NO RECONOCIDO ";
        break;
}
}











}// FIN CLASE 