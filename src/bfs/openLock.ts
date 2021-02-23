function openLock(deadends: string[], target: string): number {
  const _deadends = new Set(deadends)
  const visited = new Set()
  const q = []
  let step = 0
  q.push('0000')
  visited.add('0000')


  while(q.length){
    const size = q.length
    for(let i = 0; i < size; i++){
      const raw = q.shift()

      if (_deadends.has(raw)) continue
      if (raw === target) return step

      for(let j = 0; j < 4; j++){
        const plusStr = plusOne(raw, j)
        const minusStr = minusOne(raw, j)

        if (!visited.has(plusStr)){
          q.push(plusStr)
          visited.add(plusStr)
        }

        if (!visited.has(minusStr)){
          q.push(minusStr)
          visited.add(minusStr)
        }
      }
    }

    step++
  }


  return -1
}

function plusOne(raw: string, j: number): string {
  const ch = raw.split('')
  if (ch[j] === '9'){
    ch[j] = '0'
  } else {
    ch[j] = `${+raw[j]+1}`
  }

  return ch.join('')
}

function minusOne(raw: string, j: number): string {
  const ch = raw.split('')
  if (ch[j] === '0'){
    ch[j] = '9'
  } else {
    ch[j] = `${+raw[j]-1}`
  }

  return ch.join('')
}


const deads = ["0201","0101","0102","1212","2002"]
const target = '0202'

console.log(openLock(deads, target))