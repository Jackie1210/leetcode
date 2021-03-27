/**
 * 有效的括号字符串
 * @param s 
 */
function checkValidString(s: string): boolean {
  const left = []
  const star = []

  const slen = s.length

  for(let i = 0; i < slen; i++){
    if (s[i] === '('){
      left.push(i)
    } else if (s[i] === '*'){
      star.push(i)
    } else {
      if (left.length){
        left.pop()
      } else if (star.length){
        star.pop()
      } else {
        return false
      }
    }
  }

  while(left.length && star.length){
    if (left[left.length - 1] > star[star.length - 1]) return false
    left.pop()
    star.pop()
  }

  if (left.length) return false

  return true
};