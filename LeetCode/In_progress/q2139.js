var minMoves = function(target, maxDoubles) {
    let start = 1
    let moves = 0
    if (start == target){
        return 0
    } else{
        if (maxDoubles != 0 & start * 2 <= target){
            start *= 2
        } 
    }
};

console.log(minMoves(5, 0))
console.log(minMoves(19, 2))
