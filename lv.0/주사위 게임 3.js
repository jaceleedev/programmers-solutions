function solution(a, b, c, d) {
  const dice = [a, b, c, d];
  dice.sort((x, y) => x - y);

  const [p, q, r, s] = dice;

  if (p === s) {
    return 1111 * p;
  } else if (p === r || q === s) {
    const same = p === r ? p : s;
    const other = p === r ? s : p;

    return Math.pow(10 * same + other, 2);
  } else if (p === q && r === s) {
    return (p + r) * Math.abs(p - r);
  } else if (p === q || q === r || r === s) {
    const pairs = p === q ? [r, s] : q === r ? [p, s] : [p, q];

    return pairs[0] * pairs[1];
  } else {
    return p;
  }
}
