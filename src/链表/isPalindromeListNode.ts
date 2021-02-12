import ListNode, { ListNodeType } from './ds'

function isPalindrome(head: ListNodeType): boolean {
  let slow:ListNodeType = head
  let fast:ListNodeType = head
  while(fast !== null && fast.next !== null){
    fast = fast.next.next
    slow = slow.next
  }
  if (fast !== null){
    slow = slow.next
  }
  let left = head
  let right = reverse(slow)
  while(right !== null){
    if (left.val !== right.val){
      return false
    }

    left = left.next
    right = right.next
  }

  return true
}


function reverse(head: ListNodeType): ListNodeType{

  let pre = null
  let cur = head

  while (cur !== null) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
}

  return pre
}
