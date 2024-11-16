// 21. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
//         Promise.allSettled() para obtener información sobre el estado de todas las Promises.

let numero = parseInt(prompt('Ingrese un número'))


const promesita = function promesa(parametro) {
  return new Promise((resolve, reject) => {
    if (parametro % 2 === 0) {
      resolve(`El numero es ${parametro} par`)
    } else {
      reject(`El numero ${parametro} no es par`)
    }
  })
}


function promesa2(parametro) {
  return new Promise((resolve, reject) => {
    if (typeof parametro === "number") {
      resolve(`El ${parametro} es un número`)
    } else {
      reject(`El ${parametro} no es un número`)
    }
  })
}



function promesa3(parametro) {
  return new Promise((resolve, reject) => {
    if (parametro >= 0) {
      resolve(`El ${parametro} es un un número positivo`)
    } else {
      reject(`El ${parametro} no es un número positivo`)
    }
  })
}


Promise.allSettled([promesita(numero),promesa2(numero),promesa3(numero)]).then((respuesta) => {
    respuesta.map((parametroCualquiera) => {
        console.log(parametroCualquiera.status);
    })
})
