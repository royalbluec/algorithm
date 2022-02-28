function fibonacci(n) {
  let result = new Array(n + 1).fill(0);

  result.forEach((el, i) => {
    if (i < 2) result[i] = i;
    else result[i] = result[i - 1] + result[i - 2];
  });

  return result[n];
}

let output = fibonacci(0);
console.log(output); // --> 0

output = fibonacci(1);
console.log(output); // --> 1

output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34
