function multiply(num1: string, num2: string): string {
  const m = num1.length
  const n = num2.length
  const res: Array<number> = Array(m+n).fill(0)
  const arr1 = num1.split('')
  const arr2 = num2.split('')

  for(let i = m - 1; i >= 0; i-- ){
    for(let j = n - 1 ;j >= 0; j--){
      const p1 = i + j
      const p2 = i + j + 1
      const mul = (+arr1[i])*(+arr2[j])

      const sum = mul + (+res[p2])

      res[p2] = sum % 10
      res[p1] += Math.floor(sum / 10)

    }
  }
  let a = 0

  while( a < m+n && res[a] === 0){
    a++
  }

  const result = res.slice(a).join('')

  return result || '0'
}

multiply('0', '0')