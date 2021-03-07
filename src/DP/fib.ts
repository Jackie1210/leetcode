/**
 * 菲波列切函数
 * @param n 
 * @returns 
 */
function fib(n: number): number {
  if (n === 0 || n === 1) return n
  
  return fib(n-1)+fib(n-2)
}

function fibWithDict(n: number): number {
  if (n === 0 || n === 1) return n
  const map = new Map()
  
  return help(n, map)
}

function help(n: number, map: Map<number, number>): number{
  if (map.has(n)){
    return map.get(n)
  }

  const val = fib(n-1)+fib(n-2)

  map.set(n, val)

  return val
}

function fibDP(n: number): number {
  const dp = []

  if (n === 0 || n === 1){
    return n
  }

  dp[0] = 0
  dp[1] = 1
  for(let i = 2; i <=n; i++ ){
    dp[i] = dp [i - 1] + dp[i-2]
  }

  return dp[n]
}
