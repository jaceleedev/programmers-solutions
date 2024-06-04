function solution(str1, str2) {
  const length = str1.length;
  let answer = '';

  for (let i = 0; i < length; ++i) {
    answer += str1[i] + str2[i];
  }

  return answer;
}
