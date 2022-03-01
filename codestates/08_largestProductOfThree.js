const largestProductOfThree = function (arr) {
  let answer = [];

  const solution = (nums, num, arr = []) => {
    if (num === 3) answer.push([...arr]);
    else {
      for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i]);
        solution(nums.slice(i + 1), num + 1, arr);
        arr.pop();
      }
    }
  };

  solution(arr, 0);

  let mul = [];
  for (let i = 0; i < answer.length; i++) {
    mul.push(answer[i][0] * answer[i][1] * answer[i][2]);
  }

  mul.sort((a, b) => a - b);
  return mul[mul.length - 1];
};

let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)
