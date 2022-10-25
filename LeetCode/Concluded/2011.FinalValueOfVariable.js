var finalValueAfterOperations = function(operations) {
  var x = 0
  for (let i = 0; i < operations.length; i++) {
    if ("--X" === operations[i] || "X--" === operations[i]){
      x--
    } else {
      x++
    }
  }
  return x
};

console.log(finalValueAfterOperations(["--X","X++","X++"]))

console.log(finalValueAfterOperations(["++X","++X","X++"]))

console.log(finalValueAfterOperations(["X++","++X","--X","X--"]))