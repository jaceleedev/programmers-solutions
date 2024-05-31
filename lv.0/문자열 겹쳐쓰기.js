function solution(my_string, overwrite_string, s) {
  const arr = my_string.split('');
  arr.splice(s, overwrite_string.length, ...overwrite_string);
  return arr.join('');
}
