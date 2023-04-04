var plusOne = function(digits) {
    if (digits.length == 1){
        if (digits == 9){
            return [1,0]
        } else {
            digits[0] = digits[0] + 1
            return digits
        }
    } else if (digits.length < 15){
            digits = digits.join("")
            digits = parseInt(digits)
            digits = digits + 1
            digits = digits.toString()
            digits = digits.split('')
            for (let i = 0; i < digits.length; i++) {
                digits[i] = parseInt(digits[i])
            }
            return digits
    } else {
        let usar = []
        for (let j = digits.length-2; j < digits.length; j++) {
        usar.push(digits[j])
        }
        digits.pop()
        digits.pop()
        usar = usar.join("")
        usar = parseInt(usar)
        usar = usar + 1
        usar = usar.toString()
        for (let i = 0; i < 2; i++) {
            num = usar[i]
            num = parseInt(num)
            digits.push(num)
        }
        console.log(digits)
        if (isNaN(digits[digits.length - 1])){
            console.log("É")
            digits[digits.length - 1] = digits[digits.length - 2]
            digits[digits.length - 2] = 0
        }
        return digits
    } 
};

//console.log(plusOne([1,2,3]))

//console.log(plusOne([4,3,2,1]))

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))

