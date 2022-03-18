const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A * (B % 10));
console.log(A * Math.floor((B % 100) / 10));
console.log(A * Math.floor(B / 100));
console.log(A * B);
