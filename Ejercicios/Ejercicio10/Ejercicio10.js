// 10. Crear una función takeWhile que acepte un array y un callback y que:
//          • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
//          • devuelva un array con los elementos hasta el primer callback que devolvió false
//          • (Inverso del dropWhile)

function takeWhile(array, callback) {
    const resultado = []; //se inicializa el array vacio para alojar la sección del array hasta que encuenre una nombre de ciudad que empieze por B
  
    for (let i = 0; i < array.length; i++) {
      const elemento = array[i];
      if (!callback(elemento)) {//Mientras el callback siga siendo falso en cada vuelta, seguirá acumulando hasta que suceda lo contrario
        break; //si se cumple la condición del if termina la iteración
      }
      resultado.push(elemento); // en cada iteracion se va agregando el nombre de la ciudad al array resultado
    }
  
    return resultado; 
  }
  
  // Ejemplo de uso con nombres de ciudades
  const ciudades = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Bilbao'];
  
  const ciudadesConB = takeWhile(ciudades, (ciudad) => ciudad.startsWith('B'));//Aquí se ejecuta el callback con el metodo startsWith() que compara si una string en la posicion del array empieza con los mismos caracteres de otra concreta( en este caso con la letra 'b')
  
  console.log(ciudadesConB); // imprime: ['Madrid', 'Barcelona']