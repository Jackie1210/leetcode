/**
 * 二叉树的最大深度
 * @param root 
 */
function maxDepth(root: TreeNode | null): number {
  if(!root) return 0

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

function maxDepthBFS(root: TreeNode | null): number {
  if (!root) return 0
  let q = [root]
  let h = 0

  while(q.length){
    const tmp = []
    for(const node of q){
      if (node.left) tmp.push(node.left)
      if (node.right) tmp.push(node.right)
    }

    q = tmp
    h++
  }

  return h
};

