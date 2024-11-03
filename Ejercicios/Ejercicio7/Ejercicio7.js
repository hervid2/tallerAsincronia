function busquedaVehiculo(array, callback) {
    return array.find(callback);
  }

  const vehiculos = ['coche', 'moto', 'bici', 'camión','furgoneta','camioneta'];

// Función callback para verificar si el vehículo es una moto
function esMoto(vehiculo) {
  return vehiculo === 'moto';
}

const vehiculoEncontrado = busquedaVehiculo(vehiculos, esMoto);

console.log(vehiculoEncontrado); // Imprimirá 'moto'