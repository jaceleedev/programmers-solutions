function solution(arr, queries) {
  const answer = [];

  for (const query of queries) {
    const element = findElement(arr, query);
    answer.push(element);
  }

  return answer;
}

function findElement(arr, query) {
  const [s, e, k] = query;
  let element = -1;

  for (let i = s; i <= e; ++i) {
    if (arr[i] > k) {
      if (element === -1 || arr[i] < element) {
        element = arr[i];
      }
    }
  }

  return element;
}
