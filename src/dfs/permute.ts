function permute(nums: number[]): number[][] {
  const track = new Set<number>()
  const res = []
  dfs(nums, track, res)

  return res
}

function dfs(nums: number[], track: Set<number>, res: Array<number>[]){
  if (track.size === nums.length){
    res.push([...track])
    return
  }
  for(let num of nums){
    if (track.has(num)){
      continue
    }

    track.add(num)

    dfs(nums, track, res)

    track.delete(num)
  }
}
