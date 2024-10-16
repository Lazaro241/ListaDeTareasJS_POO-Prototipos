import {Tarea} from "./tarea.js"
import {Fechas} from "./fechas.js"
const fecha = new Fechas();
function ListaDeTareas(){
    this.tareas = [];
}

ListaDeTareas.prototype.getLengthTareas = function() {
    return this.tareas.length;
}
ListaDeTareas.prototype.addTarea = function(tarea) {
    this.tareas.push(tarea);
}
ListaDeTareas.prototype.ordenarAlfabeticamente = function(){
    this.tareas.sort((a, b) => {
        let tituloA = a.titulo.toLowerCase();
        let tituloB = b.titulo.toLowerCase();
        if (tituloA < tituloB) return -1;
        if (tituloA > tituloB) return 1;
        return 0;
    });
}

ListaDeTareas.prototype.filtrarTareasPorEstado = function(estado) {
    let estadoTareas = [];
    if(estado !== 'Todas'){
        for(let i=0 ; i<this.tareas.length; i++) {
            if(this.tareas[i].getEstado() === estado) {
                estadoTareas.push(i);
            }
        }
    } else {
        return this.tareas;
    }
    return estadoTareas;
}

ListaDeTareas.prototype.decidirListado = function(listado) {
    if(listado == this.tareas){
        this.listarTareas();
    } else {
        this.listarTareasFiltradas(listado);
    }
}

ListaDeTareas.prototype.listarTareas = function() {
    for(let i=0 ; i<this.tareas.length; i++) {
        console.log(`${i+1}) Título: ${this.tareas[i].getTitulo()}`);
    }
    console.log("\n");
}
ListaDeTareas.prototype.listarTareasFiltradas = function(tareasFiltradas) {
    for(let i=0 ; i<tareasFiltradas.length; i++) {
        console.log(`${i+1}) Título: ${this.tareas[tareasFiltradas[i]].getTitulo()}`);
    }
    console.log("\n");
}

ListaDeTareas.prototype.mostrarTareaSeleccionada = function(tareasFiltradas, seleccion){
    if(tareasFiltradas===this.tareas){
        this.tareas[seleccion].mostrarTarea();
        return seleccion;
    } else{
        this.tareas[tareasFiltradas[seleccion]].mostrarTarea();
        return tareasFiltradas[seleccion];
    }
}

ListaDeTareas.prototype.editarTareaSeleccionada = function(tarea, eleccion, edicion){
    switch(eleccion){
        case 1:
            this.tareas[tarea].setTitulo(edicion);
            break;
            
        case 2:
            this.tareas[tarea].setDescripcion(edicion);
            break;
            
        case 3:
            this.tareas[tarea].setVencimiento(edicion);
            break;
            
        case 4:
            this.tareas[tarea].setDificultad(edicion);
            break;

        case 5:
            this.tareas[tarea].setEstado(edicion);
            break;
        
    }
    this.tareas[tarea].setUltimaEdicion(fecha.determinarFecha());
}

ListaDeTareas.prototype.buscarTarea = function (nombre) {
    let coincidencias = [];
    for(let i=0; i<this.tareas.length; i++){
        if((this.tareas[i].getTitulo()).toLowerCase().includes(nombre.toLowerCase())){
            coincidencias.push(i);
        }
    }
    return coincidencias;
}


export {ListaDeTareas}