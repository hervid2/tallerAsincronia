// 18. Después de realizar una llamada a un archivo local en formato json,
//     utiliza el método then() para filtrar los datos y mostrar solo los elementos
//     que cumplan ciertos criterios (por ejemplo, mostrar solo los nombres que comiencen con "A").

const  leer = async () => {
    try {
        return await fetch("./Ejercicio18.json")
    } catch (error) {
       console.log(error);
    }
};

leer().then(data => {
   data.json().then(nombre => {
    const filtro = nombre.filter(item => item.nombre.startsWith("F"))
    console.table(filtro);
   })
  }).catch((error) => {
    console.error("Error en la operación:", error);
  });
