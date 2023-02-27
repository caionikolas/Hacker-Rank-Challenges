var mergeTwoLists = function (list1, list2) {
  for (let i = 0; i < list1.length; i++) {
    list2.push(list1[i])
  }
  let res = list2.sort()
  return res
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))
console.log(mergeTwoLists([], []))
console.log(mergeTwoLists([], [0]))
