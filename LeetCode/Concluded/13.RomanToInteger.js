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

    let unity = false
    let ten = false
    let hundred = false

    var sum = 0
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < Object.keys(romano).length; j++) {
            if (s[i] == Object.keys(romano)[j]){
                sum += Object.values(romano)[j]
            }
        } 
    }
    if (s.includes('IV') || s.includes('IX')){
        unity = true
        if (s.includes('IV') & s.includes('IX')) {
            sum -= 4
        } else{
            sum -= 2
        } 
    }
    if (s.includes('XL') || s.includes('XC')){
        ten = true
        if (s.includes('XL') & s.includes('XC')){
            sum -= 40
        } else {
            sum -= 20
        }
    }
    if (s.includes('CM') || s.includes('CD')){
        hundred = true
        if (s.includes('CM') & s.includes('CD')){
            sum -= 400
        } else {
            sum -= 200
        }  
    }
    return sum
};