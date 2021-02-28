function isValid(s: string): boolean {
  const stack = []
  const len = s.length

  for(let i = 0; i < len; i++){
    if (s[i] === '(' || s[i] === '{' || s[i] === '['){
      stack.push(s[i])
    } else {
      const sign = leftSign(stack.pop())
      if (sign !== s[i]){
        return false
      }
    }
  }

  return stack.length === 0
}

function leftSign(s: string): string{
  if (s === '[') return ']'
  if (s === '{') return '}'
  if (s === '(') return ')'
  return ''
}

const a = isValid(")(){}")

debugger

