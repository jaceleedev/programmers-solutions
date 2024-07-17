function solution(my_string, index_list) {
  const answer = [];

  index_list.forEach((index) => {
    answer.push(my_string[index]);
  });

  return answer.join('');
}
