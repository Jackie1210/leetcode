function quickSort(arr, left, right) {
  const len = arr.length
  let partitionIndex = 0
  left = typeof left != 'number' ? 0 : left
  right = typeof right != 'number' ? len - 1 : right

  if (left < right) {
      partitionIndex = partition(arr, left, right);
      quickSort(arr, left, partitionIndex-1);
      quickSort(arr, partitionIndex+1, right);
  }
  return arr;
}

function partition(arr, left ,right) {     // 分区操作
  let i = left
  let j = right + 1
  const v = arr[left]
  while(1){
    while(arr[++i] < v) if (i === right) break
    while(arr[--j] > v) if (j === left) break
    if (i >= j) break
    swap(arr, i, j)
  }

  swap(arr, left, j)

  return j
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(quickSort([1,2,5,4,6,2,3], 0, 6))