// 22. Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
// lista de elementos uno por uno.

const array = ['rojo','verde','amarillo','naranja','negro','azul','violeta'];

const bucleAsincronico = async () => {
    try {
        setTimeout(() => {
           for (let index = 0; index < array.length; index++) {
            const color = array[index];
            console.log(color);
           } 
        },4000);
    } catch (error) {
        console.error(error,"Error al procesar la información"); 
    }
}
bucleAsincronico();