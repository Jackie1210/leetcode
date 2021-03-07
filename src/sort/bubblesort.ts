function bubbleSort(arr: number[]): number[]{
  let flag = false
  const n = arr.length
  for(let i = n - 1; i >= 0; i--){
    for(let j = 0; j < i; j++){
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      flag = true
    }

    if (!flag) break
  }

  return arr
}