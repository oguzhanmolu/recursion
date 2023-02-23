// Simple fibonacci function with for loops
function fibs(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) arr.push(arr[i - 1] + arr[i - 2]);

  return arr;
}

// With recursive function
function fibsRec(n, sequence = [0, 1]) {
  if (sequence.length >= n) return sequence;
  return fibsRec(n, [
    ...sequence,
    sequence[sequence.length - 2] + sequence[sequence.length - 1],
  ]);
}
