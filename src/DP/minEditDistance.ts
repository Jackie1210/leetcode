/**
 * 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。(插入 删除 替换) 最小编辑距离
 * @param word1 
 * @param word2 
 * @returns 
 */
function minEditDistance(word1: string, word2: string): number {
  const m = word1.length
  const n = word2.length
  const dp = Array(m+1).fill(Number.MAX_SAFE_INTEGER)
  for(let i = 0; i < m+1;i++){
    dp[i] = Array(n+1).fill(Number.MAX_SAFE_INTEGER)
  }

  dp[0][0] = 0

  for(let a = 1; a <= m; a++){
    dp[a][0] = a
  }
  for(let b = 1; b <= n; b++){
    dp[0][b] = b
  }

  for(let x = 1; x <= m; x++){
    for(let y = 1; y <= n; y++){
      if (word1.charAt(x - 1) === word2.charAt(y - 1)){
        dp[x][y] = dp[x-1][y-1]
      } else {
        const insertNum = dp[x][y-1]+1
        const skipNum = dp[x-1][y-1]+1
        const deleteNum = dp[x-1][y]+1

        dp[x][y] = Math.min(insertNum, skipNum, deleteNum)
      }
    }
  }

  return dp[m][n]
}

console.log(minEditDistance('horse','ros'))