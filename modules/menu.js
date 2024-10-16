import {Input} from './input.js';
import {ListaDeTareas} from './listaDeTareas.js';
import {Tarea} from './tarea.js';

function Menu(){
    this.input = new Input();
    this.listaDeTareas = new ListaDeTareas();
}

Menu.prototype.getLengthListaDeTareas = function(){
    return this.listaDeTareas.getLengthTareas();
}
Menu.prototype.menuPrincipal = function() {
    console.log("Bienvenido");
    console.log("Seleccione una opción:");
    console.log("1. Añadir tarea");
    console.log("2. Listar tareas");
    console.log("3. Buscar tarea")
    console.log("4. Salir");
    return this.input.introducirOpcion();
}

Menu.prototype.menuPedirDatos = function() {
    let tarea = new Tarea();
    let creada = false;
    let opcion
    do{
        console.log("Elija el dato a introducir de la tarea...\n1)Titulo\n2)Descripcion\n3)Vencimiento\n4)Dificultad\n5)Finalizar\n0)Cancelar");
        opcion = this.input.introducirOpcion();
        switch (opcion) {
            case 0:
                console.log('Cancelacion de la creacion de tarea...');
                return;
                break;
            case 1:
                tarea.setTitulo(this.input.introducirTitulo());
                break;
            case 2:
                tarea.setDescripcion(this.input.introducirDescripcion());
                break;
            case 3:
                tarea.setVencimiento(this.input.introducirVencimiento());
                break;
            case 4:
                tarea.setDificultad(this.input.introducirDificultad());
                break;
            case 5:
                if(tarea.getTitulo!=='Sin titulo'){
                    this.listaDeTareas.addTarea(tarea);
                    console.log('Tarea añadida correctamente');
                    creada = true;
                } else {
                    console.error('Error, no se ha introducido un titulo...');
                }
                break;
        }
    } while(!creada);
    console.log("xd");
}

Menu.prototype.menuSeleccionEstadoAVer = function() {
    let valida = false;
    let opcion;
    do{
        console.log("Seleccione el estado de las tareas a listar");
        console.log("1) Todas\n2) Pendientes\n3) En proceso\n4) Terminadas\n0) Cancelar");
        opcion = this.input.introducirOpcion();
        if(isNaN(opcion)||opcion<0||opcion>4){
            console.log("ERROR, opcion no valida");
        } else {
            valida = true;
        }
    } while (!valida || opcion === 0);
    switch (opcion) {
        case 0:
            return 0;
        case 1:
            return "Todas";
        case 2:
            return "Pendiente";
        case 3:
            return "En proceso";
        case 4:
            return "Terminada";
    }
}


Menu.prototype.menuListarTareas = function() {
    let opcion = this.menuSeleccionEstadoAVer();
    if(opcion === 0) {
        return;
    }
    let lista = this.listaDeTareas.filtrarTareasPorEstado(opcion);

    console.log("Listado de tareas:\n");

    this.listaDeTareas.decidirListado(lista);

    return lista;
}
Menu.prototype.menuSeleccionTarea = function(listado){
    let eleccion;
    eleccion = this.input.seleccionarTarea(listado);
    if(eleccion === 0){
        return -1;
    } else {
        eleccion = eleccion - 1 ;
    }
    let tarea = this.listaDeTareas.mostrarTareaSeleccionada(listado, eleccion);
    return tarea;
}

Menu.prototype.menuPreguntarEdicion = function(tarea) {
    console.log("Si desea editar la tarea ingrese [E], de lo contrario ingrese cualquier tecla...");
    let respuesta = this.input.introducirTexto();
    if(respuesta.toLowerCase() === 'e'){
        this.menuEdicion(tarea);
    }
}
Menu.prototype.mostrarOpcionesEdicion = function(){
    console.log("¿Qué deseas editar?");
    console.log("1. Título");
    console.log("2. Descripción");
    console.log("3. Vencimiento");
    console.log("4. Dificultad");
    console.log("5. Estado");
    console.log("0. Finalizar edicion");
}

Menu.prototype.menuEdicion = function(tarea) {
    let opcion;
    do{
        this.mostrarOpcionesEdicion();
        opcion = this.input.introducirOpcion();
        switch (opcion) {
            case 1:
                this.listaDeTareas.editarTareaSeleccionada(tarea, opcion, this.input.introducirTitulo());
                break;
            case 2:
                this.listaDeTareas.editarTareaSeleccionada(tarea, opcion, this.input.introducirDescripcion());
                break;
            case 3:
                this.listaDeTareas.editarTareaSeleccionada(tarea, opcion, this.input.introducirVencimiento());
                break;
            case 4:
                this.listaDeTareas.editarTareaSeleccionada(tarea, opcion, this.input.introducirDificultad());
                break;
            case 5:
                this.listaDeTareas.editarTareaSeleccionada(tarea, opcion, this.input.introducirEstado());
                break;
            case 0:
                console.log("Edicion finalizada");
                return;
                break;
            default:
                console.log("ERROR, elección no valida");
                esperarEnter();
                break;
        }
    } while(opcion!==0);
}

Menu.prototype.menuPedirParametro = function() {
    console.log("Introduzca el nombre de la tarea que quiera buscar:");
    return this.input.introducirTexto();
}
Menu.prototype.menuBusquedaTarea = function(parametro) {
    let resultados = [];
    resultados = this.listaDeTareas.buscarTarea(parametro);
    if(resultados.length===0){
        console.log("Ninguna similitud encontrada...");
    } else {
        this.listaDeTareas.listarTareasFiltradas(resultados);
    }
    return resultados;
}
Menu.prototype.menuFin = function() {
    console.log("Cerrando...");
}
Menu.prototype.mensajeError = function() {
    console.error("Error, opcion invalida...");
}

export {Menu}
