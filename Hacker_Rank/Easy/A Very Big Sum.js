function aVeryBigSum(ar) {
  let z = 0
  for  (let i = 0; i < ar.length; i++) {
      if (ar[i] < 1 || ar[i] > 10000000000) {
          z++
      } else if (ar.length < 2 || ar.length > 10){
          z++
      }
  } 

  if (z>0) {
    return "Erro"
  } else {
    let soma = 0
    for (let i = 0; i < ar.length; i++){
       soma += ar[i]
    }
    return soma
  } 
}

aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005])
