var smallerNumbersThanCurrent = function (nums){
  var contador = nums.map((n) => n = 0)
  for (let i = 0; i < nums.length ; i++){
     for (let j = 0; j < nums.length ; j++){
         if (i != j){
            if (nums[i] > nums[j]){
               contador[i]++
            }
         }
     }
  }
  return contador
};

console.log(smallerNumbersThanCurrent([8,1,2,2,4]));

console.log(smallerNumbersThanCurrent([6, 5, 4, 8]))

console.log(smallerNumbersThanCurrent([7,7,7,7]))
