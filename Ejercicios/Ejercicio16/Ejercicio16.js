// 16. Crea tres Promises consecutivas, donde cada una se resuelva después
//          de 1 segundo y devuelva un número diferente. Luego, encadena las tres Promises
//           para sumar los resultados y mostrar el resultado final.

const crearTresPromesas = (numero) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numero);
    }, 1000);
  });
};

// Creamos las tres promesas
const promesa1 = crearTresPromesas(10);
const promesa2 = crearTresPromesas(20);
const promesa3 = crearTresPromesas(30);

promesa1.then((resultado1) => {
  console.log("Resultado 1:", resultado1);
  return promesa2.then((resultado2) => {
    console.log("Resultado 2:", resultado2);
    return promesa3.then((resultado3) => {
      console.log("Resultado 3:", resultado3);
    });
  });
});
// Utilizamos Promise.all() para esperar a que todas las promesas se resuelvan
Promise.all([promesa1, promesa2, promesa3]).then((resultados) => {
    // Los resultados de las promesas estarán en un arreglo llamado "resultados"
    const sumaTotal = resultados.reduce((acc, valor) => acc + valor, 0);//.reduce() se utiliza para reducir un arreglo a un único valor
    console.log("Suma total:", sumaTotal);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
