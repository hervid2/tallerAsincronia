// 19. Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.   

const funcionAsincronica = async () => {
    try {
        return await fetch('./Ejercicio19.json');
    } catch (error) {
        console.log(error, "Error al cargar información del servidor");
    }
}

funcionAsincronica().then(solucion => {
    solucion.json().then(data => {
        const telefonos = data.map(persona => persona.telefono); 
            for (let index = 0; index < telefonos.length; index++) {
                console.log(telefonos[index]);  
            }
        })     
    })