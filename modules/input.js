import promptSync from 'prompt-sync'
import {Fechas} from './fechas.js'

const fechas = new Fechas();

function Input() {
    this.inp = promptSync();
}

Input.prototype.introducirOpcion = function() {
    return parseInt(this.inp());
}
Input.prototype.introducirTexto = function() {
    return this.inp();
}
Input.prototype.introducirTitulo = function() {
    let introducido = false
    let titulo;
    do{
        console.log("Introduce el titulo de la tarea: ");
        titulo = this.inp();
        if(typeof titulo!="string"||titulo==""){
            console.error("Titulo no valido, intentelo nuevamente...");
        } else {
            introducido = true;
        }
    } while (!introducido)
    return titulo;
}

Input.prototype.introducirDescripcion = function() {
    console.log("Introduce la descripción de la tarea:");
    let descripcion = this.inp();
    while(typeof descripcion!="string"){
        console.error("Error: Introduce una descripción valida...");
        descripcion = this.inp();
    }
    return descripcion;
}
Input.prototype.introducirVencimiento = function(){
    let diavencimiento, mesvencimiento, aniovencimiento;
    let flag = true;
    do{
        console.log("Introduce el dia de vencimiento (en numero): ");
        diavencimiento = parseInt(this.inp());
        console.log("Introduce el mes de vencimiento (en numero): ");
        mesvencimiento = parseInt(this.inp());
        console.log("Introduce el año de vencimiento (en numero): ");
        aniovencimiento = parseInt(this.inp());
        if((isNaN(diavencimiento)&&(isNaN(mesvencimiento))&&(isNaN(aniovencimiento)))||!fechas.revisionVencimiento(diavencimiento, mesvencimiento, aniovencimiento)){
            console.log("ERROR! Introduce una fecha de vencimiento valida");
            flag=true;
        } else {
            flag=false;
        }
    } while (flag)

    let vencimiento = [aniovencimiento, mesvencimiento, diavencimiento];
    return vencimiento;
}

Input.prototype.introducirDificultad = function(){
    let dificultad;
    do{
        console.log("Introduce la dificultad de la tarea (Baja[1] Media[2] Alta[3]): ");
        dificultad = this.inp();
        if(dificultad===""){
            dificultad = 1;
        } else {
            dificultad = parseInt(dificultad);
        }
        if((isNaN(dificultad))||!(dificultad>=1&&dificultad<=3)){
            console.error("Error: Introduce una dificultad valida...");
        }
    } while(isNaN(dificultad)||(dificultad<1||dificultad>3));
    return dificultad;
}
Input.prototype.introducirEstado = function(){
    let estado;
    do{
        console.log("¿Qué deseas hacer con la tarea?");
        console.log("1. Marcar como completada");
        console.log("2. Marcar como en curso");
        console.log("3. Marcar como terminada");
        console.log("4. Marcar como cancelada");
        console.log("5. Marcar como pendiente");
        console.log("0. Cancelar edicion");
        estado = this.introducirOpcion();
        switch (estado) {
            case 1:
                return "Completada";
                break;
            case 2:
                return "En curso";
                break;
            case 3:
                return "Terminada";
                break;
            case 4:
                return "Cancelada";
                break;
            case 5:
                return "Pendiente";
                break;
            case 0:
                console.log("Edicion cancelada");
                return "Pendiente";
                break;
            default:
                console.log("Error, eleccion no valida");
                break;
        }
    } while(estado===0);
}

Input.prototype.seleccionarTarea = function(listado){
    console.log("Introduce el numero de la tarea que deseas seleccionar, o introduce [0] para volver al menu anterior: ");
    let numeroTarea = this.introducirOpcion();
    while((isNaN(numeroTarea)) || ((numeroTarea < 0)||(numeroTarea > listado.length))){
        console.error("Error: Introduce un numero valido...");
        numeroTarea = this.introducirOpcion();
    }
    return numeroTarea;
}
export {Input}