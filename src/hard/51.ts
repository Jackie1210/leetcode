/**
 * 解决N皇后问题
 * @param n 
 * @returns 
 */
function solveNQueens(n: number): string[][] {
  const path: string[][] = Array(n).fill('')
  const res: string[][] = []

  for(let i = 0; i < n; i++) {
    path[i] = Array(n).fill('.')
  }

  const dfs = (row: number) => {
    if (row === n) {
      res.push(path.map(v => v.join('')))
      return
    }
    for(let col = 0; col < n; col++) {
      if (!isValid(path, row, col, n)) continue

      path[row][col] = 'Q'
      // console.dir(`递归之前 => ${path}, pos => [${row}, ${col}]`)
      dfs(row + 1)
      // console.dir(`递归之前 => ${path}`)
      path[row][col] = '.'
    }
  }

  dfs(0)

  return res
}

function isValid(path: string[][], row: number, col: number, n: number) {
  let x = row
  let y = col
  // 垂直方向在Q上面的地方
  for(x = 0; x < row; x++) {
    if (path[x][col] === 'Q') return false
  }

  // 斜线方向在左上方的
  for(x = row - 1, y = col - 1; x >= 0 && y >= 0; x--, y--) {
    if (path[x][y] === 'Q') return false
  }

  // 斜线方向在右上方的
  for(let x = row - 1, y = col + 1; x >= 0 && y < n; x--, y++) {
    if (path[x][y] === 'Q') return false
  }

  return true
}

const res = solveNQueens(1)
console.dir(res)