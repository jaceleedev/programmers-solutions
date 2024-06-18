function solution(a, b) {
  const one = Number(a.toString() + b.toString());
  const two = 2 * a * b;

  return one >= two ? one : two;
}
