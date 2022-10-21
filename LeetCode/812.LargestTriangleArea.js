var largestTriangleArea = function (points) {
  points.sort()
  console.log(points)

  var usar = points.length - 1
  var a = points[usar][0] - points[0][0]

  for (let i = 0; i < points.length; i++) {
    points[i].reverse()
  }

  console.log(points)

  points.sort()
  console.log(points)

  var usar2 = points.length - 1
  var b = points[usar][0] - points[0][0]

  console.log(a, b)





  return 3*5
}

console.log(largestTriangleArea([[4,6],[6,5],[3,1]]))
