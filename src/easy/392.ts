function isSubsequence(s: string, t: string): boolean {
  let i = 0
  let j = 0
  const m = s.length
  const n = t.length
  while(i < m && j < n){
      if (s[i] === t[j]) i++
      j++
  }

  return i === m
};