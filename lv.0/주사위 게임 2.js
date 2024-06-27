function solution(a, b, c) {
  const sum = a + b + c;
  const sumOfSquares = a ** 2 + b ** 2 + c ** 2;
  const sumOfCubes = a ** 3 + b ** 3 + c ** 3;

  if (a === b && b === c) {
    return sum * sumOfSquares * sumOfCubes;
  } else if (a === b || b === c || c === a) {
    return sum * sumOfSquares;
  } else {
    return sum;
  }
}
