var countSmaller = function (nums) {
  var res = nums.map((n) => n = 0)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] > nums[j]){
        res[i]++
      }
    }
  }
  return res
}

console.log(countSmaller([5, 2, 6, 1]))

console.log(countSmaller([-1]))

console.log(countSmaller([-1,-1]))
