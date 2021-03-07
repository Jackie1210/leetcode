/**
 * 两个字符串的删除操作
 * 给定两个单词 word1 和 word2，找到使得 word1 和 word2 相同所需的最小步数，每步可以删除任意一个字符串中的一个字符。
 * @param word1 
 * @param word2 
 * @returns 
 */
function minDistance(word1: string, word2: string): number {
  const m = word1.length
  const n = word2.length
  const l = longestCommonSubsequence(word1, word2)

  return m+n-2*l
};

function longestCommonSubsequence(text1: string, text2: string): number {
return dp(text1, text2)
}

function dp(s1: string,s2: string): number{
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
      dp[i][j] = dp[i-1][j-1]+1
    } else {
      dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
    }
  }
}

return dp[s1.length][s2.length]
}
