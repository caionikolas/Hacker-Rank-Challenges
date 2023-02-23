var numberOfSteps = function(num) {
    if (num == 0){
        return 0
    } else{
        if (num%2 == 0){
            return 1 + numberOfSteps(num / 2)
        } else{
            return 1 + numberOfSteps(num - 1)
        }
    }
};

console.log(numberOfSteps(14))
console.log(numberOfSteps(8))