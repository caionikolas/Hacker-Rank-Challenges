/*
Diferentes maneiras de mesclar vários arrays
Existem algumas maneiras diferentes de mesclar matrizes. Uma delas é usar o método “concat”. Outra está usando o operador spread (“…”).

Também podemos livrar o array final de quaisquer duplicatas usando o objeto “Set”. 
*/

const a = [1,2]
const b = [2,3,5]

// merge but do not remove duplicates
const merge1 = (a,b) => a.concat(b)
console.log(merge1(a,b))  //[ 1, 2, 2, 3, 5 ]
// or
const merge2 = (a,b) => [...a ,...b]
console.log(merge2(a,b))  //[ 1, 2, 2, 3, 5 ]

// merge but do remove duplicates
const merge3 = [...new Set(a.concat(b))]
console.log(merge3) //[ 1, 2, 3, 5 ]
// or
const merge4 = [...new Set([...a, ...b])]
console.log(merge4) //[ 1, 2, 3, 5 ]
