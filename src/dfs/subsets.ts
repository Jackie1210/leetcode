/**
 * 求一个数组的所有子集
 * @param nums 
 * @returns 
 */
function subsets(nums: number[]): number[][] {
  const res = []
  const track = []
  dfs(res, nums, track, 0)

  return res
};

function dfs(res: number[][], nums: number[], track: number[], start: number){
  res.push([].concat(track))
  for(let i = start; i < nums.length; i++){
    track.push(nums[i])

    dfs(res, nums, track, i+1)

    track.pop()
  }
}

console.log(subsets([1,2,3,4]))