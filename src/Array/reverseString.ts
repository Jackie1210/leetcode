/**
 * 翻转字符串
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let left = 0
  let right = s.length - 1
  while(left < right){
    [s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
}