// 反转链表
//定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

//0 <= 节点个数 <= 5000

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
import {ListNodeType} from './ds'
function reverseList(head: ListNodeType): ListNodeType {
    if (!head || head.next === null) return head
    var last = reverseList(head.next)

    head.next.next = head

    head.next = null

    return last
};