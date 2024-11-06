const dropWhile = require('underscore-contrib');

const numbers = [1, 2, 3, 4, 5, 1, 2, 3];

let result = dropWhile(numbers, (num) => num < 3);

console.log(result); // Output: [ 3, 4, 5, 1, 2, 3 ]
