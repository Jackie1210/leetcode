function countPrimes(n: number){
  const isPrime = Array(n+1).fill(true)

  for(let i = 2; i * i <= n; i++){
    if (isPrime[i]){
      for(let j = i * i; j <= n; j += i){
        isPrime[j] = false
      }
    }
  }

  return isPrime
}