function solution(n) {
  const answer = [n];
  let current = n;

  while (current !== 1) {
    if (current % 2 === 0) {
      current /= 2;
    } else {
      current = 3 * current + 1;
    }

    answer.push(current);
  }

  return answer;
}
