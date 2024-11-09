// 10. Crear una función takeWhile que acepte un array y un callback y que:
//          • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
//          • devuelva un array con los elementos hasta el primer callback que devolvió false
//          • (Inverso del dropWhile)


const takeWhile = require('lodash');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Tomar los números mientras sean menores que 5
const result = takeWhile.takeWhile(numbers, (num) => num < 5);

console.log(result); // Output: [1, 2, 3, 4]