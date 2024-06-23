function solution(ineq, eq, n, m) {
  const condition = ineq + eq;

  const patterns = {
    '>=': n >= m,
    '<=': n <= m,
    '>!': n > m,
    '<!': n < m,
  };

  return Number(patterns[condition]);
}
