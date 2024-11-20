/* 25. Usar un proxy para la validación de los valores de propiedades:
 • Cuando declaremos que el atributo es numérico solo perimimos que ingresen
   números
 • Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
   letras
 • Cuando declaremos que el atributo es un email, solo permitimos que ingresen
   correos
 • Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
   fechas
 • Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
   al final de estos y se debe mostrar el error personalizado por consola */

const persona = {
    nombre: "Hernán David Cardona Becerra",
    edad: 35,
    fechaDeNacimiento: new Date(1989,3,7),//Año, mnes,día
    correo: "hdcardonab@gmail.com"
  };
  
  const manejador = {
    get(objetivo, propiedad) { 
      return objetivo[propiedad];
    },
  
    set(objetivo, propiedad, valor) {
  
      if (Object.keys(objetivo).indexOf(propiedad)=== -1){
          return console.error(`La propiedad ${propiedad} no existe`)
      }//con Object.keys() recorremos el array de las claves "propiedades" y si no es ninguna posicion salga error
      
      if (propiedad == "nombre" && !/^[a-zA-Z\s]+$/.test(valor)) {
        return console.error("Valor debe contener solo letras y espacios");
      }//if que usa un regex para validar que solo sea un campo de valor tipo "letras"
  
      if(propiedad == "edad" && !/^[0-9]+$/.test(valor)){
        return console.error("Valor debe contener solo números"); 
      }//if que usa un regex para validar que solo sea un campo de valor tipo "números"

     if(propiedad == "fechaDeNacimiento" && !/^\d{4}-\d{2}-\d{2}$/.test(valor)){
       throw new Error("El valor debe tener el formato de fecha (año,mes,día)");
       }//if que valida que sólo sea un campo de "fecha"

      if(propiedad == "correo" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)){
        throw new Error("El valor debe tener un formato de correo electrónico válido");
      }//if que valida que sólo sea un campo tipo "correo"
      objetivo[propiedad] = valor;
    }
  }
  
  const proxy = new Proxy(persona, manejador);

console.log(proxy.nombre);
console.log(proxy.edad);
console.log(proxy.fechaDeNacimiento);
console.log(proxy.correo);


//Con este bloque estamos tratando de agregar una propiedad que no existe
proxy.profesion = "boxeador";

//Con este bloque estamos tratando de agregar valores que no corresponden a los parametros de las propidedades
proxy.nombre = "1258";
proxy.edad = "hola";
proxy.fechaDeNacimiento = "hola";
proxy.correo = "holahola.com";

 