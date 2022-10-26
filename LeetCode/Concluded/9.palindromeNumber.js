var isPalindrome = function(x) {
    let inicio = x.toString()
    let final = inicio.split("")
    final = final.reverse()
    final = final.join("")
    if (inicio === final){
        return true 
    } else {
        return false
    }
};

console.log(isPalindrome(12321))