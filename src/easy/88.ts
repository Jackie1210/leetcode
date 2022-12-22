/**
 Do not return anything, modify nums1 in-place instead.
 双指针 逆向思维 从尾部开始赋值，防止覆盖的情况
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1
  let j = n - 1
  let x = m + n - 1
  let tmp = 0

  while(i >= 0 || j >= 0) {
    if (i === -1) {
      nums1[x--] = nums2[j]
      j--
      continue
    }

    if (j === -1) {
      i--
      continue
    }

    if (nums1[i] < nums2[j]) {
      tmp = nums2[j]
      j--
    } else {
      tmp = nums1[i]
      i--
    }

    nums1[x--] = tmp
  }
}