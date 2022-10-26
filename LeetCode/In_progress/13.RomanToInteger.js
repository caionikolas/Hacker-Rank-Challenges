var romanToInt = function(s) {
    let romano = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    var sum = 0
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < Object.keys(romano).length; j++) {
            if (s[i] == Object.keys(romano)[j]){
                    sum += Object.values(romano)[j]
                }
            } 
        }
    return sum
};

console.log(romanToInt('III'))

console.log(romanToInt('LVIII'))

console.log(romanToInt('MCMXCIV'))