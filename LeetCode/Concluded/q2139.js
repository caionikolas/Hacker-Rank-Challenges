var minMoves = function (target, maxDoubles) {
  let moves = 0
  while (target !== 1) { 
    if (maxDoubles == 0){           
        return moves + target - 1
    }        
    if (target % 2 !== 0) {        
      target--
      moves++
    }
    if (maxDoubles !== 0 && target !== 1) { 
      target = target / 2
      maxDoubles--
      moves++
    } 
  }
  return moves
}

console.log(minMoves(19, 2))

