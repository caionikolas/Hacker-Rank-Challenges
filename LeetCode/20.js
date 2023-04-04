var isValid = function(s) {
    if (typeof(s) == "string"){
        newS = s.split('')
    } else {
        newS = s
    }
    console.log(newS)
    if (newS.length == 0){
        return true
    } else {
        for (let i = 0; i < newS.length; i++) {
            if(newS[i] == '('){
                if (newS[i+1] == ')'){
                    newS.splice(i+1, 1)
                    newS.splice(i, 1)
                    return isValid(newS)
                }
            } else if(newS[i] == '['){
                if (newS[i+1] == ']'){
                    newS.splice(i+1, 1)
                    newS.splice(i, 1)
                    return isValid(newS)
                }
            } else if(newS[i] == '{'){
                if (newS[i+1] == '}'){
                    newS.splice(i+1, 1)
                    newS.splice(i, 1)
                    return isValid(newS)
                }
            }
        }
        return false
    }
};

//console.log(isValid("()")) //verdadeiro

//console.log(isValid("()[]{}"))//verdadeiro

//console.log(isValid("(]"))   //falso

//console.log(isValid("([])")) // true

console.log(isValid("([)]")) // false

