// 15. Crea una Promise que se rechace después de 2 segundos y captura el 
// error para imprimir "Error: Promise rechazada". 

async function funcionPromiseRechazada() {
    // Simulamos una operación que tarda 2 segundos y luego falla
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Promise rechazada!')); // Rechazamos la promesa con un error
        }, 2000);
    });

    // Esta línea nunca se ejecutará porque la promesa fue rechazada
    return "Promise cumplida!";
}

funcionPromiseRechazada().then(resultado => {
    console.log(resultado); // Esta parte no se ejecutará
  }).catch(error => {
    console.error(error.message); // Imprimimos el mensaje del error
  });