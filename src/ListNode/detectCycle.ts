import ListNode from './ds'

function detectCycle(head: ListNode | null): ListNode | null {
  let fast = head
  let slow = head

  while(fast !== null && fast.next !== null){
    fast = fast.next.next
    slow = slow.next
    if (slow === fast) break
  }

  if (fast === null || fast.next === null) return null

  slow = head
  while(slow !== fast){
    slow = slow.next
    fast = fast.next
  }

  return slow
}