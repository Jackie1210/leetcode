import TreeNode from './ds'
let rank = 0
let res = -1

function kthSmallest(root: TreeNode | null, k: number): number {
  help(root, k)

  return res
}


function help(root: TreeNode | null, k: number){
  if (root === null){
    return
  }

  help(root.left, k)
  rank++
  if (rank === k){
    res = root.val

    return
  }
  help(root.right, k)

}