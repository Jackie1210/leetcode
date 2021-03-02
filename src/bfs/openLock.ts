// 你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。每个拨轮可以自由旋转：例如把 '9' 变为  '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。

// 锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。

// 列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。

// 字符串 target 代表可以解锁的数字，你需要给出最小的旋转次数，如果无论如何不能解锁，返回 -1。

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