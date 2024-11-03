// 5. Crear una función every que acepte un array y un callback y que: 
// • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento 
// • devuelva true si todas las llamadas al callback devolvieron true


function numerosPositivos(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (!callback(array[i])) {
        return false; // Si alguna llamada al callback devuelve false, se detiene la iteración y se devuelve false
      }
    }
    return true; // Si todas las llamadas al callback devolvieron true, se devuelve true
  }
  
  let numeros = [-10,-20,40,5,-50,450,75,8];
  
  let sonTodosPositivos = numerosPositivos(numeros, (numero) => numero > 0);
  
  console.log(sonTodosPositivos); // Imprimirá false, ya que no todos los números son positivos
