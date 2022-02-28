function power(base, exponent) {
  if (exponent === 0) return 1;

  if (exponent % 2 === 0) {
    let n = power(base, exponent / 2) % 94906249;
    return (n * n) % 94906249;
  } else {
    let n = power(base, (exponent - 1) / 2) % 94906249;
    return (((n * n) % 94906249) * base) % 94906249;
  }
}

let output = power(3, 40);
console.log(output); // --> 19334827
