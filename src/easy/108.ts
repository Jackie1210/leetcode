/**
 * 将有序数组转成高度平衡的二叉树
 */

import TreeNode from "../binaryTree/ds"

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const i = Math.floor(nums.length / 2)

  if (nums[i] === undefined) return null

  return new TreeNode(
    nums[i],
    sortedArrayToBST(nums.slice(0, i)),
    sortedArrayToBST(nums.slice(i + 1))
  )
}
