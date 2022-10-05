//Obtenha o comprimento de um objeto JavaScript com uma pequena ajuda de Object.keys()

const obj = {
  firstName: "farroq",
  lastName: "dad",
  age: 21
}

const keys = Object.keys(obj)

console.log(keys) //  [ 'firstName', 'lastName', 'age' ]
console.log(keys.length) // 3