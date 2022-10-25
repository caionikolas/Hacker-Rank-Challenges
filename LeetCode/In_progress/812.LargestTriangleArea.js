var largestTriangleArea = function (points) {
  points.sort()
  console.log(points)

  //primeira parte

  baseMaior = 0
  baseMenor = 51
  for (let i = 0; i < points.length; i++) {
    if (baseMaior < points[i][0]) {
      baseMaior = points[i][0]
    }
    if (baseMenor > points[i][0]) {
      baseMenor = points[i][0]
    }
  }

  base = baseMaior - baseMenor
  console.log(base)

  alturaMaior = 0
  alturaMenor = 51
  for (let i = 0; i < points.length; i++) {
    if (alturaMaior < points[i][1]) {
      alturaMaior = points[i][1]
    }
    if (alturaMenor > points[i][1]) {
      alturaMenor = points[i][1]
    }
  }

  altura = alturaMaior - alturaMenor
  console.log(altura)

  if (base == altura){
    return ((base * altura)/2)
  } else {
      //segunda parte
  baseNeg = []
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      baseNeg.push(Math.abs(points[i][0] - points[j][0]))
    }
  }

  //baseNeg = baseNeg.filter((este, i) => baseNeg.indexOf(este) == i)
  console.log(baseNeg)

  alturaNeg = []
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      alturaNeg.push(Math.abs(points[i][1] - points[j][1]))
    }
  }

  //alturaNeg = alturaNeg.filter((este, i) => alturaNeg.indexOf(este) == i)
  console.log(alturaNeg)

  // Terceira parte

  areaNeg = 0
  for (let i = 0; i < baseNeg.length; i++) {
    areaNeg += (baseNeg[i] * alturaNeg[i]) / 2
  }

  console.log(areaNeg)

  // quarta parte

  areaTriangle = (base*altura) - areaNeg

  return areaTriangle
}
  }






console.log(
  largestTriangleArea([
    [4, 6],
    [6, 5],
    [3, 1]
  ])
)

console.log(
  largestTriangleArea([[1,0],[0,0],[0,1]])
)



console.log(
  largestTriangleArea([
    [0, 0],
    [0, 1],
    [1, 0],
    [0, 2],
    [2, 0]
  ])
)


console.log(
  largestTriangleArea([
    [0, 0],
    [0, 2],
    [2, 0]
  ])
)
