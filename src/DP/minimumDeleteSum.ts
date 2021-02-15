function minimumDeleteSum(s1: string, s2: string): number {
  return dp(s1, s2)
}

function dp(s1: string, s2: string): number{
  const s1ASCIISum = s1.split('').reduce((acce, prev) => acce + prev.charCodeAt(0), 0)
  const s2ASCIISum = s2.split('').reduce((acce, prev) => acce + prev.charCodeAt(0), 0)

  const m = s1.length
  const n = s2.length
  let dp = Array(m+1)
  for(let index = 0; index < dp.length; index++){
    if (index === 0){
      dp[index] = Array(n+1).fill(0)
    } else {
      dp[index] = [0].concat(Array(n).fill(-1))
    }
  }

  for(let i = 1; i <= m; i++){
    for(let j = 1; j <= n; j++){
      if(s1.charAt(i - 1) === s2.charAt(j - 1)){
        dp[i][j] = dp[i-1][j-1]+s1.charCodeAt(i - 1)
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
      }
    }
  }

  return s1ASCIISum + s2ASCIISum - 2 * dp[m][n]

}

console.log(minimumDeleteSum('sea', 'eat')) // 231