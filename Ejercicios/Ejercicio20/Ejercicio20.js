// 20. Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.

const crearTresPromesas = (tiempo) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Promesa resuelta en ${tiempo}ms`);
      }, tiempo);
    });
  };
  
  // Creamos las tres promesas con diferentes tiempos
  const promesa1 = crearTresPromesas(1000);
  const promesa2 = crearTresPromesas(2000);
  const promesa3 = crearTresPromesas(4000);

  promesa1.then(resultado1 => {
    console.log("Resultado 1:", resultado1);
    return promesa2.then(resultado2 => {
      console.log("Resultado 2:", resultado2);
      return promesa3.then(resultado3 => {
        console.log("Resultado 3:", resultado3);
      });
    });
  });
  
  // Utilizamos Promise.all() para esperar a que todas se resuelvan
  Promise.all([promesa1, promesa2, promesa3])
    .then((resultados) => {
      console.log('Todas las promesas se han resuelto:');
    })
    .catch((error) => {
      console.error('Ocurrió un error:', error);
    });
