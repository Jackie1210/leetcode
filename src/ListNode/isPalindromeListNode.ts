import ListNode, { ListNodeType } from './ds'

/**
 * 判断链表是会问链表。快慢指针是的慢指针定位到中点的位置，快指针定位到终点。再翻转链表进行比较
 * @param head 
 * @returns 
 */
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
