const mergeSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length < 2) return arr;
  const pivot = Math.floor(arr.length / 2);
  const left = arr.slice(0, pivot);
  const right = arr.slice(pivot, arr.length);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
};

let output = mergeSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]
