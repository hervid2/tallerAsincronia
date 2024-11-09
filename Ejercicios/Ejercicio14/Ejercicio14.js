// 14. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
//         diga "Operación completada". Utiliza async/await.

async function operacionAsincrona() {
    // Simulamos una operación que tarda 1 segundo
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return "Operación completada";
  }

  operacionAsincrona().then(resultado => {
    console.log(resultado); // Imprime "Operación completada" después de 1 segundo
  })
  .catch(error => {
    console.error(error);
  });