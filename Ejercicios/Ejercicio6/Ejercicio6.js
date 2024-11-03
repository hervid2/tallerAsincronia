// 6. Crear una función some que acepte un array y un callback y que:
//         • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
//         • devuelva true si al menos una de las llamadas al callback devolvió true 

var frutas = ["fresa", "banana", "kiwi", "melocotón","coco","mandarina"];

function revisarDisponibilidad(array, valor) {
  return array.some((arrayValor) => valor === arrayValor);
}
console.log(revisarDisponibilidad(frutas,"mandarina"));//retorna valor booleano, en este caso, true


