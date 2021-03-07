import TreeNode from './ds'
/**
 * 二叉树的最小高度 进行广度优先遍历
 * @param root 
 * @returns 
 */
function minDepth(root: TreeNode | null): number {
  if (!root) return 0
  const q = [root];
  let depth = 1
  while(q.length) {
      let len = q.length
      for (let i = 0; i < len; i++) {
          const cur = q.shift()
          if (!cur.left && !cur.right) return depth
          if (cur.left) q.push(cur.left)
          if (cur.right) q.push(cur.right)
      }
      depth++
  }
}