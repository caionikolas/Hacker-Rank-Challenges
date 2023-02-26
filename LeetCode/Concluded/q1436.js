/* ver estrutura de dados ==  fila === */
var destCity = function (paths) {
  const array = []
  const resp = []

  paths.forEach((e, index) => {
    e.forEach(h => {
      for (let i = 0; i < paths.length; i++) {
        if (i !== index && paths[i].includes(h)) {
          array.push(h)
        }
      }
    })
  })

  paths.forEach(e => {
    e.forEach((h, index) => {
      if (!array.includes(h)) {
        resp[index] = h
      }
    })
  })

  return resp[resp.length - 1]
}

console.log(
  destCity([
    ['London', 'New York'],
    ['New York', 'Lima'],
    ['Lima', 'Sao Paulo']
  ])
)
