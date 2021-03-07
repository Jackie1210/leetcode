function insertSort(arr: number[]): number[]{
  const n = arr.length

  for(let i = 0; i < n; i++){
    for(let j = i; j > 0; j--){
      if (arr[j] < arr[j-1]){
        const tmp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = tmp
      }
    }
  }

  return arr
}


console.log(insertSort([]))