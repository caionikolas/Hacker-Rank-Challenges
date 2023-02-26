var mergeTwoLists = function (list1, list2) {
  for (let i = 0; i < list1.length; i++) {
    list2.push(list1[i])
  }
  if (list2.length < 2) {
    return list2
  } else {
    let base = list2[0]
    let menores = []
    let maiores = []
    for (let j = 0; j < list2.length; j++) {
      if (list2[j] <= base) {
        menores.push(list2[j])
      } else {
        maiores.push(list2[j])
      }
    }
    return mergeTwoLists(menores)
  }
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))
console.log(mergeTwoLists([], []))
console.log(mergeTwoLists([], [0]))
