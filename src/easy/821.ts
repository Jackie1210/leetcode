/**
 * 给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。
返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。
两个下标 i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。
 * @param s 
 * @param c 
 */
function shortestToChar(s: string, c: string): number[] {
  let prev = Number.MIN_SAFE_INTEGER / 2

  const res = Array(s.length).fill(0)

  for(let i = 0; i < s.length; i++){
    if (s[i] === c) prev = i
    res[i] = i - prev
  }

  prev = Number.MAX_SAFE_INTEGER / 2
  for(let i = s.length - 1; i >= 0; i--){
    if (s[i] === c) prev = i
    res[i] = Math.min(res[i], prev - i)
  }

  return res
};