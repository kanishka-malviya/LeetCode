/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function reverseLL(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let newHead = reverseLL(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null && head.next === null) {
        return true;
    }

    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let second = reverseLL(slow); //To skip the middle element in odd
    let temp = head;

    while (second !== null) {
        if (temp.val !== second.val) {
            reverseLL(second);
            return false;
        }
        temp = temp.next;
        second = second.next;
    }
    return true;
};

// 1->3->5->3->1
// second = 1<-3