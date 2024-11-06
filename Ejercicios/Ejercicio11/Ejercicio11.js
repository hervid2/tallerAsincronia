// 11. ¿Cuál es el resultado del código a continuación? 

let i = 0;

setTimeout(() => alert(i), 100); /// Se programa un alert para 100ms en el futuro

// Bucle intensivo que toma más de 100ms
for(let j = 0; j < 100000000; j++){
    i++;
}
// Una vez que el bucle termina, el alert se ejecuta y muestra el valor final de i que vendría a ser
// 100000000 ya que el bucle se ejecutó hasta ese punto y no se
// ejecutó el setTimeout que se programó para 100ms en el futuro.
// Según la consolo del navegador, para ejecutar el bucle y el setTimeout juntos, eventualmente se toma
// 1184 milisegundos