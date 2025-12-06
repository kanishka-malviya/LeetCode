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
var middleNode = function(head) {
    if (!head) {
        return head;
    }
    let tortoise = head;
    let hare = head;

    while (hare !== null && hare.next !== null && hare.next.next !== null) {
        tortoise = tortoise.next;
        hare = hare.next.next;
    }

    if (hare.next !== null) {
        return tortoise.next;
    }

    return tortoise;
};