var findBestValue = function (arr, target) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    let sum = 0
    while (sum < (target - arr[i])){
      sum += arr[i]
      console.log(sum)
    }
    res.push(sum)
    console.log("------------")
  }
  return res
}

console.log(findBestValue([4, 9, 3], 10))

//console.log(findBestValue([2, 3, 5], 10))