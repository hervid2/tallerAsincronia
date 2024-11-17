// 13. Crea una Promise que se resuelva después de 3 segundos y luego imprima
// "Promise resuelta" cuando se cumpla.

function miPromesa() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Promesa resuelta!");
        resolve();
      }, 3000);
    });
  }
  
  miPromesa();