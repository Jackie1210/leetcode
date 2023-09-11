/**
 * 根据前序遍历，中序遍历结果还原二叉树
 */

import TreeNode from './ds'

function buildTree(preOrder: any[], midOrder: any[]) {
    if (
        !preOrder.length ||
        !midOrder.length ||
        !preOrder ||
        !midOrder
    ) return null

    const root = new TreeNode(preOrder[0])
    const index = midOrder.indexOf(root.val)

    const midLeftOrder = midOrder.slice(0, index)
    const midRightOrder = midOrder.slice(index + 1)

    const preLeftOrder = preOrder.slice(1, index + 1)
    const preRightOrder = preOrder.slice(index + 1)

    root.left = buildTree(preLeftOrder, midLeftOrder)
    root.right = buildTree(preRightOrder, midRightOrder)

    return root
}

const root = buildTree(
    [1, 2, 3, 4],
    [2, 1, 3, 4]
)

console.dir(root)