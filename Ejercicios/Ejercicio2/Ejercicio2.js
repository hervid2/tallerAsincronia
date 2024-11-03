// En el siguiente código hay una llamada programada setTimeout, luego se
// ejecuta un cálculo pesado que demora más de 100 ms en finalizar. ¿Cuándo
// se ejecutará la función programada y por qué se ejecutará? a) Después del
// bucle. b) Antes del bucle. c) Al comienzo del bucle. ¿Qué va a mostrar
// alert()?
let i = 0;

setTimeout(() => alert(i), 100); /// Se programa un alert para 100ms en el futuro

// Bucle intensivo que toma más de 100ms
for(let j = 0; j < 100000000; j++){
    i++;
}
// Una vez que el bucle termina, el alert se ejecuta y muestra el valor final de i



//Respuesta: La función programada con setTimeout se ejecutará después del bucle (opción a).
// La función setTimeout() está programada para ejecutarse después de 100 milisegundos
// y por otro lado el bucle "for" realiza un cálculo intensivo, seguramente por mas rapido que sea
//demorará mas de los 100 milisegundos del setTimeout(). Esto quiere decir que primero se ejecuta
//el for(){} y luego sí, se ejecutará el setTimeout(), y esto es porque la tarea que se programa
//con setTimeout() se añade a una "cola" de eventos, y que se ejecute en "cola" es porque JavaScript
// es de un solo hilo (single thread)y esto hace que ejecute una sola tarea a la vez. En este caso,
//el bucle "for" ocupa todo el hilo principal, impidiendo que se ejecuten otras tareas hasta que
//termine. Una vez el bucle finaliza, el hilo principal queda libre y puede procesar la cola de eventos
// ejecutando la función alert() que estaba programada. 

//El alert() termina mostrando el valor final de i, al final de toda el ciclo de iteración, y será 
//en este caso i * un millón de veces