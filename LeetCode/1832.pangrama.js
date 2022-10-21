var checkIfPangram = function(sentence) {
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var test = true
    for (let i = 0; i < alphabet.length; i++) {
        if (!sentence.includes(alphabet[i])){
            test = false
        }
    }
    return test
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));

console.log(checkIfPangram("leetcode"));