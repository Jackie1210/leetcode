import TreeNode from './ds'

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (!nums || nums.length === 0){
    return null
  }

  return help(nums, 0, nums.length - 1)
}

function help(nums: number[], p: number, q: number): TreeNode|null{
  if (p > q){
    return null
  }

  let maxVal = Number.MIN_SAFE_INTEGER
  let index = -1

  for(let i = p; i <= q; i++){
    if (maxVal < nums[i]){
      maxVal = nums[i]
      index = i
    }
  }
  const root = new TreeNode(maxVal)
  root.left = help(nums, p, index - 1)
  root.right = help(nums, index + 1, q)

  return root
}