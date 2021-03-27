/**
 * 有效的数独
 * @param board 
 */
function isValidSudoku(board: string[][]): boolean {
  const row: Array<Map<string, number>> = []
  const col: Array<Map<string, number>> = []
  const box: Array<Map<string, number>> = []

  for(let i = 0; i < 9; i++){
    row[i] = new Map()
    col[i] = new Map()
    box[i] = new Map()
  }

  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      const n = board[i][j]
      if (n === '.') continue

      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)

      row[i].set(n, (row[i].get(n) || 0) + 1)
      col[j].set(n, (col[j].get(n) || 0) + 1)
      box[boxIndex].set(n, (box[boxIndex].get(n) || 0) + 1)

      if (row[i].get(n) > 1 || col[j].get(n) > 1 || box[boxIndex].get(n) > 1) return false
    }
  }

  return true
};