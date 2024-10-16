function Fechas() {}

Fechas.prototype.determinarFecha = function(){
    let b = new Date();
    let fecha = b.toISOString();
    fecha = fecha.slice(0, fecha.indexOf("T"));
    return fecha;
}
Fechas.prototype.fechaActual = function(){
    return new Date();
}
Fechas.prototype.revisionVencimiento = function(diavencimiento, mesvencimiento, aniovencimiento) {
    let vencimiento = new Date(aniovencimiento, mesvencimiento - 1, diavencimiento);
    let dia = (vencimiento.getDate() == diavencimiento);
    let mes = (vencimiento.getMonth()+1 == mesvencimiento);
    let anio = (vencimiento.getFullYear() == aniovencimiento);
    
    const fechaActual = this.fechaActual();

    let esFuturo = (vencimiento>=fechaActual);
    return (dia&&mes&&anio&&esFuturo);
}

export {Fechas}