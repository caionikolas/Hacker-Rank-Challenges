/* ver algoritmos gulosos e pesquisa e largura */

var minMoves = function(target, maxDoubles) {
    let num = 1
    let moves = 0
    while (num != target){
        if (maxDoubles != 0 & num * 2 <= target){
            num *= 2
            moves++
            maxDoubles-- 
        } else{
            num++
            moves++
        }
    }
    return moves
};

console.log(minMoves(5, 0))
console.log(minMoves(19, 2))
console.log(minMoves(10, 4))
