var largestTimeFromDigits = function(arr) {
    let rra = arr.reverse()
    let newArr = []
    while (rra.length > 0){
        let j = 0
        for (let i = 0; i < rra.length; i++) {
            if (rra[i] == 3){
                newArr.push(rra[j])
            }
            
        }
    }

    let num1 = ""
    let num2 = ""
    let sim = 0
    if (arr[0] >= arr[1]){
        num1 = arr[0].toString() + arr[1].toString()
    } else {
        num1 = arr[1].toString() + arr[0].toString()
    }
    if (arr[2] >= arr[3]){
        num2 = arr[2].toString() + arr[3].toString()
    } else {
        num2 = arr[3].toString() + arr[2].toString()
    }
    
    if (num1 < 23){
        sim++
    }
    if (num2 < 59){
        sim++
    }
    if (sim == 2){
        return num1 + ":" + num2
    } else {
        return ""
    }
};

console.log(largestTimeFromDigits([1,2,3,4]))     //23:41  
//console.log([5,5,5,5])     //"" 
