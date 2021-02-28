function pancakeSort(arr: number[]): number[] {
  const res = []
  const length = arr.length

  for(let i = length - 1; i > 0; --i){
    const maxNumIndex = findMaxNumIndex(arr.slice(0, i + 1))

    if (maxNumIndex > 0){
      reverse(arr, 0, maxNumIndex)
      res.push(maxNumIndex + 1)
    }

    reverse(arr, 0, i)
    res.push(i + 1)
  }

  return res
}

function findMaxNumIndex(arr: number[]): number{
  const maxNum = arr.reduce((acce, curr) => Math.max(acce, curr), Number.MIN_SAFE_INTEGER)
  const maxNumIndex = arr.indexOf(maxNum)

  return maxNumIndex
}

function reverse(arr: number[], i: number, j: number): void{
  while(i < j){
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
  }
}

