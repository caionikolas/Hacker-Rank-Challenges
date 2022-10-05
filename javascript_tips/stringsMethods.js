// dicas sobre métodos de string JavaScript

'farooq'.length // 6
'farooq'[1] // 'a'
'farooq'.includes('oos') // false
'farooq'.includes('oo') // true
'farooq'.indexOf('ar') // 1
'farooq'.startsWith('f') //true
'farooq'.endsWith('f') //false
'farooq'.slice(0,5) // faroo
'farooq'.slice(4) // oq
'farooq'.toUpperCase() // FAROOQ
'FAROOQ'.toLowerCase() // farooq
'farooq'.replace('oo', 'ff') // farffq
'farooq'.repeat(3) // farooqfarooqfarooq
'far ooq'.split('') // ['f', 'a', 'r', ' ', 'o', 'o', 'q']
'far ooq'.split(' ') // ['far', 'ooq']