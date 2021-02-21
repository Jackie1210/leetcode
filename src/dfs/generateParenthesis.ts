/**
 * 生成合法括号对的数量
 * @param n 
 */
function generateParenthesis(n: number): string[] {
  const res = []
  let track = []

  const left = n
  const right = n

  dfs(res, track, left, right)

  return res
}

function dfs(res: string[], track: string[], left: number, right: number){

  if (left < 0 || right < 0) return
  if (right < left) return
  if (left === 0 && right === 0){
    res.push([].concat(track).join(''))
  }

  track.push('(')
  dfs(res, track, left - 1, right)
  track.pop()

  track.push(')')
  dfs(res, track, left, right - 1)
  track.pop()
}
