function Tarea(){
    this.titulo= "Sin titulo";
    this.descripcion= "Sin descripcion";
    this.estado= "Pendiente";
    this.creacion= "N/A";
    this.ultimaedicion= "N/A";
    this.vencimiento= "N/A";
    this.dificultad= 1;
}

Tarea.prototype.mostrarDificultad = function(){
    switch(this.dificultad){
        case 1: return "★☆☆";
        break;
        case 2: return "★★☆";
        break;
        case 3: return "★★★";
        break;
    }
}

Tarea.prototype.mostrarTarea = function(){
    console.log(`\nTítulo: ${this.titulo}\n`);
    if(this.tarea!=="Sin descripcion"){
        console.log(`${this.descripcion}\n`);
    }
    console.log(`Dificultad: ${this.mostrarDificultad()}`);
    console.log(`Estado: ${this.estado}`);
    console.log(`Creación: ${this.creacion}`);
    console.log(`Ultima edición: ${this.ultimaedicion}`);
    if(typeof this.vencimiento !== "string"){
        console.log(`Vencimiento: ${this.vencimiento[0]}-${this.vencimiento[1]}-${this.vencimiento[2]}`);
    }
}

Tarea.prototype.setTitulo = function(titulo) {
    this.titulo = titulo;
}

Tarea.prototype.getTitulo = function() { return this.titulo; }

Tarea.prototype.getEstado = function() { return this.estado; }

Tarea.prototype.setDescripcion = function(descripcion) {
    this.descripcion = descripcion;
}

Tarea.prototype.setDificultad = function(dificultad) {
    this.dificultad = dificultad;
}

Tarea.prototype.setEstado = function(estado){
    this.estado = estado;
}

Tarea.prototype.setCreacion = function(creacion){
    this.creacion = creacion;
}

Tarea.prototype.setUltimaEdicion = function(ultimaEdicion){
    this.ultimaedicion = ultimaEdicion;
}

Tarea.prototype.setVencimiento = function(vencimiento){
    this.vencimiento = vencimiento;
}



export {Tarea};