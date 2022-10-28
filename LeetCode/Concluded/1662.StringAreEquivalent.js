var arrayStringsAreEqual = function(word1, word2){
  var sumWord1 = ""
  var sumWord2 = ""
  for (let i = 0; i < word1.length ; i++){
      sumWord1 += word1[i]
  };
  for (let i = 0; i < word2.length ; i++){
      sumWord2 += word2[i]
  };
  if (sumWord1 === sumWord2){
    return true
  } else {
    return false
  }
};