function coinChange(coins: number[], amount: number): number {
  const map = new Map()
  return dp(coins, amount, map)
}

function dp(coins: number[], amount: number, map: Map<number, number>): number{
  if (amount === 0) return 0
  if (amount < 0) return -1
  if (map.has(amount)) return map.get(amount)

  let res = Number.MAX_SAFE_INTEGER
  for(let coin of coins){
    let sub = dp(coins, amount - coin, map)

    if (sub < 0) continue

    res = Math.min(res, sub + 1)

  }

  map.set(amount, res !== Number.MAX_SAFE_INTEGER ? res : -1)

  return map.get(amount)
}

/**
 * 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
 * dp => 对于金额i 所需要的最少的硬币个数
 * @param coins 
 * @param amount 
 * @returns 
 */
function coinChangeDP(coins: number[], amount: number): number{
  const dp = Array(amount+1).fill(amount+1)

  dp[0] = 0

  for(let i = 1; i < dp.length; i++ ){
    for(let coin of coins){
      if (i - coin < 0) continue

      dp[i] = Math.min(dp[i], dp[i-coin]+1)
    }
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount]
}

console.log(coinChangeDP([2],3))