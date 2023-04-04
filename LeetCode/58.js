var lengthOfLastWord = function(s) {
    s = s.split(' ')
    console.log(s)
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].trim()
    }
    while (s[s.length-1] == ''){
        s.pop()
        console.log(s)
    }
    return s[s.length-1].length
};

//console.log(lengthOfLastWord("luffy is still joyboy"))

console.log(lengthOfLastWord("   fly me   to   the moon  "))