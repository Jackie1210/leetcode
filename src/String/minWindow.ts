/**
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * @param s 
 * @param t 
 * @returns 
 */
function minWindow(s: string, t: string): string {
  let left = 0
  let right = 0
  let need = new Map()
  let window = new Map()

  let valid = 0

  let start = 0
  let len = Number.MAX_SAFE_INTEGER

  for(let i = 0; i < t.length; i++) {
    const str = t[i]
    need.set(str, (need.get(str) || 0) + 1) 
  }

  while(right < s.length){
    const temp = s[right]
    right++

    if (need.has(temp)){
      window.set(temp, (window.get(temp) || 0) + 1)
      if (need.get(temp) === window.get(temp)){
        valid++
      }
    }

    while(valid === need.size){
      if (right - left < len){
        start = left
        len = right - left
      }

      const d = s[left]
      left++

      if (need.has(d)){
        if (need.get(d) === window.get(d)){
          valid--
        }
        window.set(d, window.get(d) - 1)
      }
    }
  }

  return len === Number.MAX_SAFE_INTEGER ? '' : s.substr(start, len)
}

const s = 'ADOBECODEBANC'
const t = 'ABC'

console.log(minWindow(s, t))