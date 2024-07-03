function solution(l, r) {
  const result = [];

  function generateNumber(current) {
    if (current > r) {
      return;
    }

    if (current >= l) {
      result.push(current);
    }

    generateNumber(current * 10 + 5);
    generateNumber(current * 10);
  }

  generateNumber(5);

  result.sort((a, b) => a - b);

  return result.length > 0 ? result : [-1];
}
