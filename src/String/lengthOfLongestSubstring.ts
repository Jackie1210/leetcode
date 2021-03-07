/**
 * 最长无重复子串
 * @param s 
 * @returns 
 */
function lengthOfLongestSubstring(s: string): number {
  let window = new Map()

  let left = 0
  let right = 0
  let res = 0
  while(right < s.length){
    const a = s[right]
    right++

    window.set(a, (window.get(a) || 0) + 1)

    while(window.get(a) > 1){
      const d = s[left]

      left++

      window.set(d, window.get(d) - 1)
    }

    res = Math.max(res, right - left)

  }

  return res
}
