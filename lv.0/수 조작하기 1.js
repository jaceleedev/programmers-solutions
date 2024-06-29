function solution(n, control) {
  const map = {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
  };

  let answer = n;

  for (const ch of control) {
    answer += map[ch];
  }

  return answer;
}
