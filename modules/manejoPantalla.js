import promptSync from 'prompt-sync'
const input = promptSync();
function ManejoPantalla() {}

ManejoPantalla.prototype.limpiarPantalla = function(){
    console.clear();
}

ManejoPantalla.prototype.esperarEnter = function(){
    input("Presiona cualquier tecla para continuar...");
} 

export {ManejoPantalla}