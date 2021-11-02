import TreeNode from './ds'
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const pArr = [p]
  const qArr = [q]

  while(pArr.length || qArr.length) {
      const pNode = pArr.shift()
      const qNode = qArr.shift()
      if (pNode === null && qNode === null) continue
      if (pNode === null || qNode === null) return false
      if (pNode.val !== qNode.val) {
          return false
      } else {
          pArr.push(pNode.left)
          pArr.push(pNode.right)
          qArr.push(qNode.left)
          qArr.push(qNode.right)
      }
  }

  return true
};