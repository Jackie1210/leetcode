// 接雨水

function trap(height: number[]): number {
  const m = height.length
  const l_max = Array(m).fill(0)
  const r_max = Array(m).fill(0)

  let res = 0

  l_max[0] = height[0]
  r_max[m-1] = height[m-1]

  for(let i = 1; i < m;i++){
    l_max[i] = Math.max(l_max[i-1], height[i])
  }

  for(let j = m - 2; j >= 0; j--){
    r_max[j] = Math.max(r_max[j + 1], height[j])
  }

  height.forEach((h, x) => {
    res += (Math.min(l_max[x], r_max[x]) - h)
  })

  return res
}

trap([0,1,0,2,1,0,1,3,2,1,2,1])