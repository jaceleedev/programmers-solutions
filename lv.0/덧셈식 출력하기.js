const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  const [a, b] = input.map(Number);
  console.log(`${a} + ${b} = ${a + b}`);
});
