// import {nombreTarea, crearTarea} from './tareas.js';

// console.log(nombreTarea);
// const tarea1 = crearTarea('Pasear al perro', 'Media');
// console.log(tarea1);
import Tarea from './tareas.js';
import ComprasPendientes from './compras.js';

const tarea1 = new Tarea('Aprender js', 'Urgente');

console.log(tarea1);

tarea1.mostrar();

const compra1 = new ComprasPendientes('Pizza', 'Urgente', 2);

console.log(compra1);