var majorityElement = function (nums) {
  /* Find the candidate for Majority*/
  var tamanho = nums.length
  let cand = findCandidate(nums, tamanho)
  console.log(cand)

  /* Print the candidate if it is Majority*/
  if (isMajority(nums, tamanho, cand)) {
    console.log(' ' + cand + ' ')
  } else {
    console.log('No Majority Element')
  }
}

/* Function to find the candidate for Majority */
function findCandidate(nums, tamanho) {
  let maj_tamanho = 0,
    count = 1
  let i
  for (i = 1; i < tamanho; i++) {
    if (nums[maj_tamanho] == nums[i]) {
      count++
    } else {
      count--
    }
    if (count == 0) {
      maj_tamanho = i
      count = 1
    }
  }
  //console.log(maj_tamanho)
  return nums[maj_tamanho]
}

// Function to check if the candidate
// occurs more than n/2 times
function isMajority(nums, tamanho, cand) {
  let i,
    count = 0
  for (i = 0; i < tamanho; i++) {
    if (nums[i] == cand) {
      count++
    }
  }
  if (count > parseInt(tamanho / 2, 10)) {
    return true
  } else {
    return false
  }
}

majorityElement([3, 2, 3])
