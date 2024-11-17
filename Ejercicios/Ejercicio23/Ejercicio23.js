// 23. Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
// try/catch para mostrar un mensaje de error en caso de fallo.

const leer = async () => {
  try {
    return await fetch("./Ejercicio23.json");
  } catch (error) {
    console.log(error);
  }
};

leer().then((respuesta) => {
  respuesta.json().then((data) => {
    console.log(data.nombre);
    console.log(data.edad);
    console.log(data.ocupacion);
    console.log(data.gustos);
    for (let i = 0; i < data.gustos.length; i++) {
      console.log(data.gustos[i]);
    }
    console.log(data.obj);
  });
});
