function triangleArea(a, b, c) {
  let allSide = (a + b + c) / 2;
  let area = Math.sqrt(allSide * (allSide - a) * (allSide - b) * (allSide - c));
  return area
}

//console.log(triangleArea(2, 3.5, 4))