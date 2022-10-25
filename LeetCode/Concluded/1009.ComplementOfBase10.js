var bitwiseComplement = function (n) {
  var decimal = []
  var valor = 0

  if (n == 0) {
    return 1
  } else if (n == 1) {
    return 0
  } else {
    if (n % 2 === 0) {
      while (n != 0) {
        valor = n % 2
        decimal.push(valor)
        n = parseInt(n / 2)
      }
    } else {
      while (n != 1) {
        valor = n % 2
        decimal.push(valor)
        n = parseInt(n / 2)
      }
      decimal.push(1)
    }

    for (let i = 0; i < decimal.length; i++) {
      if (decimal[i] == 1) {
        decimal[i] = 0
      } else {
        decimal[i] = 1
      }
    }

    var res = 0
    for (let j = 0; j < decimal.length; j++) {
      res += decimal[j] * 2 ** j
    }
    
    return res
  }
}

//console.log(bitwiseComplement(5))

//console.log(bitwiseComplement(7))

//console.log(bitwiseComplement(10))

console.log(bitwiseComplement(0))
