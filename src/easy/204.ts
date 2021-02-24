function countPrimes(n: number): number {
  const arr = Array(n).fill(true)
  let sum = 0

  for(let i = 2; i * i < n; i++){
    if (arr[i]){
      for(let j = 2 * i; j < n; j += i){
        arr[j] = false
      }
    }
  }

  for(let a = 2; a < n; a++){
    if (arr[a]){
      sum++
    }
  }

  return sum
};
