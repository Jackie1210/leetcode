/**
 * 给定两个字符串 s1 和 s2，判断 s1 是否包含 s2 的子串
 * 思路： 滑动窗口 在收缩的时候判断结果
 * @param s1 
 * @param s2 
 * @returns 
 */
function checkInclusion(s1: string, s2: string): boolean {
  let need = new Map()
  let window = new Map()
  let left = 0
  let right = 0

  let valid = 0
  const s1Len = s1.length

  for(let i = 0; i< s1.length; i++){
    const str = s1[i]
    need.set(str, (need.get(str) || 0) + 1)
  }

  while(right < s2.length){
    const a = s2[right]

    right++

    if (need.has(a)){
      window.set(a, (window.get(a) || 0) + 1)
      if (need.get(a) === window.get(a)){
        valid++
      }
    }

    while(right - left >= s1Len){
      if (valid === need.size){
        return true
      }

      const d = s2[left]
      left++

      if (need.has(d)){
        if (need.get(d) === window.get(d)){
          valid--
        }
        window.set(d, window.get(d) - 1)
      }
    }
  }

  return false
}



