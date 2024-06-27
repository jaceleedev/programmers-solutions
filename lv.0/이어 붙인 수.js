function solution(num_list) {
  let oddStr = '';
  let evenStr = '';

  for (const num of num_list) {
    if (num % 2 === 0) {
      oddStr += num;
    } else {
      evenStr += num;
    }
  }

  const oddNum = Number(oddStr);
  const evenNum = Number(evenStr);

  return oddNum + evenNum;
}
