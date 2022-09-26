function simpleArraySum(ar) {
  let soma = 0
      for (let i = ar.length - 1; i >= 0 ; i--) {
          soma += ar[i] 
      }
  return soma
}

simpleArraySum([1,2,3,4,10,11])