function solution(number) {
  return number.split('').reduce((acc, curr) => acc + Number(curr), 0) % 9;
}
