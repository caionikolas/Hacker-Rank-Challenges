function compareTriplets(a, b) {
  let i = 0
  let pA = 0
  let pB = 0
  let total = []
  while (i != a.length) {
      if (a[i] > b[i]) {
          pA++
      } else if(a[i] < b[i]){
          pB++
      } 
      i++
  }
  total.push(pA)
  total.push(pB)
  console.log(total) 
}

compareTriplets([5,6,7], [3,6,10])