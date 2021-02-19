function solveNQueens(n: number): string[][] {
  const res = []

  let track =  Array(n).fill('.')
  for(let i = 0 ; i < n; i++){
    track[i] = Array(n).fill('.')
  }

  dfs(track, 0, n, res)

  return res
}

function dfs(track: string[][], row: number, n: number, res: string[][]){

  if (row === n){
    res.push(track.map(t => t.join('')))
    return
  }
  for(let col = 0; col < n; col++){
    if (!isValid(track, row, col, n)){
      continue
    }

    track[row][col] = 'Q'

    dfs(track, row + 1, n, res)

    track[row][col] = '.'
  }
}

function isValid(res: string[][], row: number, col: number, n: number): boolean{
  for(let i = 0; i < n; i++){
    if (res[i][col] === 'Q'){
      return false
    }
  }

  for(let x = row - 1, y = col - 1; x >= 0 && y >= 0; x--,y--){
    if (res[x][y] === 'Q'){
      return false
    }
  }

  for(let a = row - 1, b = col + 1; a >=0 && b<n;a--,b++){
    if (res[a][b] === 'Q'){
      return false
    }
  }

  return true
}

console.log(solveNQueens(4))