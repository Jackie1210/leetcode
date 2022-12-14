import ListNode from '../ListNode/ds'

/**
 * 判断是不是回文链表
 */

/**
 * 添加一个数组
 */
function isPalindrome(head: ListNode | null): boolean {
  if (!head) return false

  const arr = []
  let p = head

  while (p) {
    arr.push(p.val)
    p = p.next
  }

  for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    if (arr[i] === arr[j]) {
      continue
    } else {
      return false
    }
  }

  return true
}

function isPalindromeByReverse(head: ListNode | null): boolean {
  if (!head) return null

  const firstHalf = findHalf(head)

  // 跳过中点并翻转后半部分链表
  const senondHalf = reverseList(firstHalf.next)

  let p = head
  let q = senondHalf

  // 后半部分一定是小于等于前半部分的长度的，所以判断后半部分即可
  while(q) {
    if (p.val !== q.val) return false

    p = p.next
    q = q.next
  }

  // 重置
  firstHalf.next = reverseList(senondHalf)

  return true
}

/**
 * 翻转链表
 * @param head 
 * @returns 
 */
function reverseList(head: ListNode | null): ListNode | null {
  let x = null
  let p = head
  let q = head

  while(p && q) {
    q = q.next
    p.next = x
    x = p
    p = q
  }

  return x
}

/**
 * 找到链表的中点
 * @param head 
 * @returns 
 */
function findHalf(head: ListNode): ListNode {
  let fast = head
  let slow = head

  while(fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
  }

  return slow
}
