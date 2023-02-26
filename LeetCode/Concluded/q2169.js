var countOperations = function(num1, num2) {
    if (num1 == 0 || num2 == 0){
        return 0
    } else {
        if (num1 >= num2){
            return 1 + countOperations((num1-num2),num2)
        } else{
            return 1 + countOperations(num1,(num2-num1))
        }
    }
};

console.log(countOperations(2, 3)) //2 ,1 // 1, 1 // 0 ,1  3
console.log(countOperations(10, 10)) // 0, 10 1