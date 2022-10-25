var isPalindrome = function(head) {
    let inicio = head.join("")
    let final = head.reverse()
    final = final.join("")
    if (inicio == final){
        return true
    } else {
        return false
    }
};

console.log(isPalindrome([1,2,2,1]))