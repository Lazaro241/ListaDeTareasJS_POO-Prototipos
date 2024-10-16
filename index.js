import { ManejoPantalla } from './modules/manejoPantalla.js';
import {Menu} from './modules/menu.js';

const menu = new Menu();
const manejoPantalla = new ManejoPantalla();

let opcion;
function main(){
    do{
        manejoPantalla.limpiarPantalla();
        if(menu.getLengthListaDeTareas() > 0){
            menu.listaDeTareas.ordenarAlfabeticamente();
        }
        opcion = menu.menuPrincipal();
        switch(opcion){
            case 1:
                menu.menuPedirDatos();
                break;
            case 2:
                let lista = menu.menuListarTareas();
                let tarea = menu.menuSeleccionTarea(lista);

                if(tarea!==-1){
                    menu.menuPreguntarEdicion(tarea);
                }
                break;
            case 3:
                let parametro = menu.menuPedirParametro();
                let busquedaTareas = menu.menuBusquedaTarea(parametro);
                let tar=0;
                if(busquedaTareas.length>0) {
                    tar = menu.menuSeleccionTarea(busquedaTareas);
                }
                if(tar !== -1) {
                    menu.menuPreguntarEdicion(tar);
                }
                break;
            case 4:
                menu.menuFin();
                break;
            default:
                menu.mensajeError();
                break;
        }
        manejoPantalla.esperarEnter();
    } while(opcion!=4)
}

main();