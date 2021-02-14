function removeDuplicateLetters(s: string): string {
  const times = new Map()
  const list = new Set()
  let res = []
  
  for(let str of s){
    times.set(str, (times.get(str) || 0) + 1)
  }

  for(let i = 0; i < s.length; i++){
    times.set(s[i], times.get(s[i]) - 1)
    if (list.has(s[i])) continue
    while(res.length > 0 && res[res.length - 1].charCodeAt(0) > s[i].charCodeAt(0)){
      if (times.get(res[res.length - 1]) === 0) {
        break
      }
      const d = res.pop()
      list.delete(d)
    }
    res.push(s[i])
    list.add(s[i])
  }

  return res.join('')
}
