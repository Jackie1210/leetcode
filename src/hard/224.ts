function calculate(s: string): number {

  return helper(s, 0)
};

function helper(list: string, index: number): number{
  const res = []
  let sign = '+'
  let num = 0
  while(index < list.length){
    const s = list[index++]

    if (isDigit(s)) num = 10 * num + (+s - 0)

    if (s === '(') num = helper(list, index)

    if ((!isDigit(s) && s !== ' ') || list.length === index){
      let pre = 1
      switch(sign){
        case '+':
          res.push(num)
          break
        case '-':
          res.push(-num)
          break
        case '*':
          pre = res.pop()
          res.push(num * pre)
          break
        case '/':
          pre = res.pop()
          res.push(pre / num > 0 ? Math.floor(pre / num) : Math.ceil(pre / num))
          break
      }
      sign = s
      num = 0
    }

    if (s === ')') break

  }

  const sum = res.reduce((acce, curr) => acce + curr, 0)

  return sum
}

function isDigit(s: string): boolean{
  const regex = /[0-9]/gi

  return regex.test(s)
}

