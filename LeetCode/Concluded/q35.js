var searchInsert = function (nums, target) {
    let inicio = 0
    let final = nums.length - 1
    if (target > nums[nums.length - 1]) {
        return nums.length
    } else if (target < nums[0]) {
        return 0
    }
    while (inicio <= final) {
        let meio = Math.floor((inicio + final) / 2)
        let chute = nums[meio]
        if (chute == target) {
            return meio
        } else if (chute > target) {
            final = meio - 1
        } else if (chute < target){
            inicio = meio + 1
        }
    }
    if (inicio > final){
        return inicio
    }
}

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1, 3], 2))
console.log(searchInsert([3, 5, 7, 9, 10], 8))
