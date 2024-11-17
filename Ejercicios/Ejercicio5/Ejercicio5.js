// 5. Crear una función every que acepte un array y un callback y que: 
// • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento 
// • devuelva true si todas las llamadas al callback devolvieron true


  let numeros = [-10,-20,40,5,-50,450,75,8];

  let sonTodosPositivos = numeros.every (num => {
    return num >= 0
  });

  console.log(sonTodosPositivos);

  if (sonTodosPositivos){
    console.log("Son todos positivos");
    
  } else{
    console.log("No son todos positivos");
  }
  