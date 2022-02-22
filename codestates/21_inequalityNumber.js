const inequalityNumber = function (signs) {
  // TODO: 여기에 코드를 작성합니다.
  signs = signs.split(' ');
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const min = dfs(-1, signs, [], digits, Array(10).fill(false));
  const max = dfs(-1, signs, [], digits.reverse(), Array(10).fill(false));
  console.log(max, min);
  return max - min;
};

const dfs = (idx, signs, nums, digits, isVisited) => {
  if (idx === signs.length) {
    return parseInt(nums.join(''));
  }
  const sign = signs[idx];
  for (let i = 0; i < digits.length; i++) {
    const right = digits[i];
    if (isVisited[right]) continue;
    if (idx >= 0) {
      const left = nums[nums.length - 1];
      if (sign === '<' && left >= right) continue;
      if (sign === '>' && left <= right) continue;
    }
    isVisited[right] = true;
    const target = dfs(idx + 1, signs, nums.concat(right), digits, isVisited);
    if (target !== undefined) {
      return target;
    }
    isVisited[right] = false;
  }
  return undefined;
};

let output = inequalityNumber('<');
console.log(output); // --> 88 (89 - 01)

output = inequalityNumber('< >');
console.log(output); // --> 876 (897 - 021)

output = inequalityNumber('> < >');
console.log(output); // --> 8,754 (9,786 - 1,032)
