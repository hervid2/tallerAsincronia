// 17. Realiza una llamada a un archivo local Muestra en formato json,
// luego muestre los datos obtenidos en la consola.


async function cargarDatosJsonFetch(archivo) {
  try {
    const response = await fetch(archivo); //Hace una petición al servidor para obtener el archivo.
    const datosJson = await response.json(); //Convierte la respuesta del servidor en un objeto JSon.
    console.log(datosJson);
  } catch (error) {
    console.error("Error al cargar el archivo:", error);
  }
}

// Llama a la función con la ruta del archivo
cargarDatosJsonFetch("mis_datos.json");

























