const balancedBrackets = function (str) {
  if (str === '') return true;

  const strArr = str.split('');
  const bracket = [];

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '(' || strArr[i] === '{' || strArr[i] === '[') {
      bracket.push(strArr[i]);
    } else {
      let lastEl = bracket.pop();
      const bool =
        (strArr[i] === ')' && lastEl === '(') ||
        (strArr[i] === '}' && lastEl === '{') ||
        (strArr[i] === ']' && lastEl === '[');
      if (!bool) {
        bracket.push(lastEl);
      }
    }
  }

  if (bracket.length === 0) return true;
  return false;
};

let output = balancedBrackets('(');
console.log(output); // // -> false

output = balancedBrackets('()');
console.log(output); // --> true

// Advanced
let output = balancedBrackets('[](){}');
console.log(output); // --> true

output = balancedBrackets('[({})]');
console.log(output); // --> true

let output3 = balancedBrackets('[(]{)}');
console.log(output); // --> false
