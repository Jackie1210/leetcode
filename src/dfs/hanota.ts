/**
 Do not return anything, modify C in-place instead.
 */
 function hanota(A: number[], B: number[], C: number[]): void {
  const n = A.length
  
  dfs(n, A, B, C)
}

function dfs(n: number, A: number[], B: number[], C: number[]){
  if (n === 1){
    C.push(A.pop())

    return
  }


  dfs(n - 1, A, C, B)
  C.push(A.pop())
  dfs(n - 1, B, A, C)
}
