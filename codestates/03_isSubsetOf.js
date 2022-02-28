const isSubsetOf = function (base, sample) {
  const sumOfArr = base.concat(sample);
  const sumOfSet = new Set(sumOfArr);

  if (sumOfSet.size === base.length) return true;
  return false;
};

let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true

sample = [6, 7];
output = isSubsetOf(base, sample);
console.log(output); // --> false

base = [10, 99, 123, 7];
sample = [11, 100, 99, 123];
output = isSubsetOf(base, sample);
console.log(output); // --> false
