let tiling = function (n) {
  let result = new Array(n + 1).fill(0);

  for (let i = 0; i < n + 1; i++) {
    if (i < 3) result[i] = i;
    else result[i] = result[i - 1] + result[i - 2];
  }

  return result[n];
};

let output = tiling(2);
console.log(output); // --> 2

output = tiling(4);
console.log(output); // --> 5
/* 
2 x 4 보드에 타일을 놓는 방법은 5가지
각 타일을 a, b, c, d로 구분

2 | a b c d
1 | a b c d 
------------

2 | a a c c
1 | b b d d 
------------

2 | a b c c
1 | a b d d 
------------

2 | a a c d
1 | b b c d 
------------

2 | a b b d
1 | a c c d 
------------
*/
