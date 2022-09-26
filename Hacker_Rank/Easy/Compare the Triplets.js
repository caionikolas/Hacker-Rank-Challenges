function compareTriplets(a, b) {
    let z = 0
    for  (let i = 0; i < a.length; i++) {
        if (a[i] < 1 || a[i] > 100) {
            z++
        } else if (b[i] < 1 || b[i] > 100){
            z++
        }
    } 
    
    if (z>0) {
        return "Erro" 
    } else {
        let i = 0
        let pA = 0
        let pB = 0
        let total = []
        while (i != a.length) {
            if (a[i] > b[i]) {
            pA++
            } else if (a[i] < b[i]){
            pB++
        } 
        i++
    }
    total.push(pA)
    total.push(pB)
    return total
    }
}

compareTriplets([5,6,1], [30,6,10])




