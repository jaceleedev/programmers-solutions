const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];
  let answer = '';
  for (const ch of str) {
    if (ch === ch.toLowerCase()) {
      answer += ch.toUpperCase();
    } else if (ch === ch.toUpperCase()) {
      answer += ch.toLowerCase();
    }
  }
  console.log(answer);
});
