function combine(n: number, k: number): number[][] {
  const res = []
  const track = []
  dfs(res, track, n, k, 1)

  return res
}

function dfs(res: number[][], track: number[], n: number, k: number, start: number){
  if (track.length === k){
    res.push([].concat(track))

    return
  }

  for(let i = start; i <= n; i++){
    track.push(i)

    dfs(res, track, n, k, i + 1)

    track.pop()
  }
}
