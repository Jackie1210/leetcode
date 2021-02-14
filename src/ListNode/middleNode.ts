import ListNode from './ds'
function middleNode(head: ListNode | null): ListNode | null {
  let fast = head
  let slow = head
  while(fast !== null && fast.next !== null){
    fast = fast.next.next
    slow = slow.next
  }

  return slow
}