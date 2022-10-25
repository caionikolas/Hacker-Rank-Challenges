var trimMean = function(arr) {
  compareNumbers = (a, b) =>  a - b
  arr.sort()
  arr.sort(compareNumbers)
  var menor = arr.length*0.05
  arr.splice(0,menor)
  arr.splice(arr.length-menor,menor)
  var total = arr.reduce((soma, i) => soma + i)
  let media = total/arr.length
  return media
};

console.log(trimMean([6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]));