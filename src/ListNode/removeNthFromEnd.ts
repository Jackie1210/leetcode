import ListNode from './ds'

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let fast = head
  let slow = head
  while(n-- > 0){
    fast = fast.next
  }

  if (fast === null){
    return head.next
  }

  while(fast !== null && fast.next !== null){
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next

  return head
}