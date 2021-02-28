function longestPalindrome(s: string): string {
  const n = s.length
  let res = ''
  for(let i = 0; i < n; i++){
    const s1 = findString(s, i, i)
    const s2 = findString(s, i, i + 1)

    res = res.length > s1.length ? res : s1
    res = res.length > s2.length ? res : s2
  }

  return res
}

function findString(s, l, r){
  while(s[l] === s[r] && l >= 0 && r < s.length){
    l--
    r++
  }

  const str = s.substring(l + 1, r)

  return str

}
