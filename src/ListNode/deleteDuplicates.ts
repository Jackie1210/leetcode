import ListNode from './ds'

/**
 * 删除重复的元素
 * @param head 
 * @returns 
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return null
  let fast = head
  let slow = head

  while(fast !== null){
    if (fast.val !== slow.val){
      slow = slow.next

      slow.val = fast.val
    }

    fast = fast.next
  }

  slow.next = null

  return head
}