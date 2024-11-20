// 24. Crear un objeto proxy usando la clase Proxy

const persona = {
  nombre: "Hernán",
  apellido: "Becerra",
  edad: 39
};

const manejador = {
  get(objetivo, propiedad) { //objetivo es el objeto persona, propiedad es nombre o edad
    console.log(
      `Se ha accedido a la propiedad ${propiedad} del objeto ${objetivo}`
    );
    return objetivo[propiedad];
  },

  set(objetivo, propiedad, valor) {

    Object.preventExtensions(objetivo);//previne que otras propiedades sean añadidas al objeto persona desde afuera
    Object.seal(objetivo);//impide eliminar propiedades existentes o reconfigurar las existentes 

    if (Object.keys(objetivo).indexOf(propiedad)=== -1){
        return console.error(`La propiedad ${propiedad} no existe`)
    }
    
    if (propiedad == "nombre" && !/^[a-zA-Z\s]+$/.test(valor)) {
      throw new Error("Valor debe contener solo letras y espacios");
    }

    if(propiedad == "edad" && !/^[0-9]+$/.test(valor)){
        throw new Error("Valor debe contener solo números");
        
    }
    objetivo[propiedad] = valor;
  }
}

const proxy = new Proxy(persona, manejador);
// El objeto proxy se puede utilizar de la misma manera que el objeto original
proxy.apellido = "Cardona"; // El manejador se activa al intentar acceder
// a la propiedad nombre
proxy.profesion = "Boxeador"
proxy.edad = 40; // El manejador se activa al intentar establecer
// la propiedad edad
console.log(proxy.nombre);
console.log(persona);

