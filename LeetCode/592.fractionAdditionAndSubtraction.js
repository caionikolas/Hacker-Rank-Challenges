var fractionAddition = function(expression) {
  let letras = expression.split('')
  console.log(letras)

  let numeros = []
  let numerador = []
  let denominador = []

  for (let i = 0; i < expression.length; i++) {
    if (isNaN(expression[i]) == false){
      numeros.push(expression[i])
    }
  }


  var mmc = 1

  console.log(mmc)

  function e_multiplo(v1, v2){
    return v1 % v2 === 0
  }

  console.log(numeros)
};

console.log(fractionAddition("1/3-1/2"))