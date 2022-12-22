/**
 * 两个数组的交集
 * @param nums1 
 * @param nums2 
 * @returns 
 */
function intersection(nums1: number[], nums2: number[]): number[] {
  const set2 = new Set<number>(nums2)
  const res = new Set<number>()

  let i = 0
  let len = nums1.length

  while(i < len) {
      if (set2.has(nums1[i])) {
          res.add(nums1[i])
      }
      i++
  }

  return [...res]
};