function arrayTecnologia(array, callback) {
    let index = 0;
  
    // Usamos do...while para ejecutar al menos una vez el callback
    do {
      if (!callback(array[index])) {
        break; // Rompe el bucle cuando el callback devuelve false
      }
      index++;
    } while (index < array.length);
  
    // Retorna un nuevo array a partir del primer índice donde callback fue false
    return array.slice(index);
  }
  
  // Ejemplo de uso:
  const tecnoProductos = [
    { id: 1, nombre: "Laptop", precio: 1200, categoria: "Computadores" },
    { id: 2, nombre: "Smartphone", precio: 800, categoria: "Teléfonos" },
    { id: 3, nombre: "Tablet", precio: 500, categoria: "Tablets" },
    { id: 4, nombre: "Smartwatch", precio: 200, categoria: "Wearables" },
    { id: 5, nombre: "Audífonos", precio: 150, categoria: "Audio" },
    { id: 6, nombre: "Camara", precio: 1000, categoria: "Fotografía" }
  ];
  
  // Condición: detenerse cuando encuentre un producto con precio menor a 500
  const resultado = arrayTecnologia(tecnoProductos, (producto) => producto.precio > 500);
  console.log(tecnoProductos);
  console.log(resultado);
  
  