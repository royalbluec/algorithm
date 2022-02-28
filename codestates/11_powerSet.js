const powerSet = function (str) {
  const arr = str.split('');
  let filtered = arr.filter((el, i) => arr.indexOf(el) === i);
  filtered.sort();
  let flag = new Array(filtered.length).fill(false);
  let answer = [];
  const solution = (depth) => {
    if (depth === flag.length)
      answer.push(filtered.filter((el, idx) => flag[idx]));
    else {
      flag[depth] = 0;
      solution(depth + 1);
      flag[depth] = 1;
      solution(depth + 1);
    }
  };
  solution(0);

  for (let i = 0; i < answer.length; i++) {
    answer[i] = answer[i].join('');
  }

  return answer.sort();
};

let output1 = powerSet('abc');
console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

let output2 = powerSet('jjump');
console.log(output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']
