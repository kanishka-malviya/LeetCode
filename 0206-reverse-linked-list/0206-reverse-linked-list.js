/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let temp = head;
    let prev = null;
    let front = temp;

    if (temp === null || temp.next === null) {
        return head;
    }

    while (temp.next !== null) {
        front = temp.next;
        temp.next  = prev;
        prev = temp;
        temp = front;
    }

    temp.next = prev;
    prev = temp;
    return prev;
};