const array = [
  {
    id: 1,
    name: "John",
    age: 25,
  },
  {
    id: 2,
    name: "Jane",
    age: 34,
  },
  {
    id: 3,
    name: "Luis",
    age: 28,
  },
  {
    id: 4,
    name: "Teresa",
    age: 35,
  },
  {
    id: 5,
    name: "Leonardo",
    age: 29,
  },
  {
    id: 6,
    name: "Felipe",
    age: 30,
  },
  {
    id: 7,
    name: "Falcao",
    age: 31,
  },
];

function esMayorDeTreinta(array) {
    return array.find(persona => persona.age > 34);
  }
  
  const personaMayorDeTreinta = esMayorDeTreinta(array);
  console.log(personaMayorDeTreinta);