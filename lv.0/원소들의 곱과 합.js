function solution(num_list) {
  let product = 1;
  let sum = 0;

  for (const num of num_list) {
    product *= num;
    sum += num;
  }

  sum = sum ** 2;

  return Number(product < sum);
}
