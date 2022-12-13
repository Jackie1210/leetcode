/**
 * 环形链表
 */

import ListNode from "../ListNode/ds"

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false
  let fast = head
  let slow = head

  while(fast && fast.next && slow) {
      fast = fast.next.next
      slow = slow.next

      if (fast === slow) {
          return true
      }

  }

  return false
}