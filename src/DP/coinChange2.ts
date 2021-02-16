function change(amount: number, coins: number[]): number {
  const n = coins.length
  let dp = Array(n+1)

  for(let i = 0; i <= n; i++){
    dp[i] = Array(amount+1).fill(0)
  }

  for(let j = 0;j <= n;j++){
    dp[j][0] = 1
  }

  for(let x = 1; x<= n; x++){
    for(let y = 1; y<= amount; y++){
      if (y - coins[x-1] >= 0){
        dp[x][y] = dp[x-1][y] + dp[x][y-coins[x-1]]
      } else {
        dp[x][y] = dp[x-1][y]
      }
    }
  }

  return dp[n][amount]
};