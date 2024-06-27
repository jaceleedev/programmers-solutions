function solution(num_list) {
  const lastNum = num_list[num_list.length - 1];
  const prevNum = num_list[num_list.length - 2];

  if (lastNum > prevNum) {
    num_list.push(lastNum - prevNum);
  } else {
    num_list.push(lastNum * 2);
  }

  return num_list;
}
