function findAnagrams(s: string, p: string): number[] {
  let need = new Map()
  let window = new Map()
  let left = 0
  let right = 0

  let valid = 0
  const res :Array<number> = []

  for(let i = 0; i< p.length; i++){
    const str = p[i]
    need.set(str, (need.get(str) || 0) + 1)
  }

  while(right < s.length){
    const a = s[right]

    right++

    if (need.has(a)){
      window.set(a, (window.get(a) || 0) + 1)
      if (need.get(a) === window.get(a)){
        valid++
      }
    }

    if(right - left === p.length){
      if (valid === need.size){
        res.push(left)
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

  return res
}

