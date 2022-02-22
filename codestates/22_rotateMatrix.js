const rotateMatrix = function (matrix, rotateNum = 1) {
  // TODO: 여기에 코드를 작성합니다.
  const N = matrix.length;
  const M = matrix[0] && matrix[0].length;

  rotateNum = rotateNum % 4;
  if (rotateNum === 0) return matrix;

  const rotated = [];
  const RC = rotateNum % 2 === 1 ? [M, N] : [N, M];

  for (let row = 0; row < RC[0]; row++) {
    rotated[row] = [];
    for (let col = 0; col < RC[1]; col++) {
      if (rotateNum === 1) rotated[row][col] = matrix[N - col - 1][row];
      else if (rotateNum === 2)
        rotated[row][col] = matrix[N - row - 1][M - col - 1];
      else rotated[row][col] = matrix[col][M - row - 1];
    }
  }

  return rotated;
};
