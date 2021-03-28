function bubbleSort(arr: number[]): number[]{
  let flag = false
  const n = arr.length
  for(let i = n - 1; i >= 0; i--){
    for(let j = 0; j < i; j++){
      if (arr[j] > arr[j + 1]){
        swap(arr, i, j)
        flag = true
      }
    }

    if (!flag) break
  }

  return arr
}

function swap(arr: number[], i: number, j: number): void{
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}