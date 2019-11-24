/**
 * Reverse a singly-linked list 
 */

// Definition for singly-linked list node.
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList (head) {
    // initialize previous and current
    let [prev, current] = [null, head];

    while(current) {
        // on the go update prev and current using new ES6 syntax
        [current.next, prev, current] = [prev, current, current.next];
    }
    return prev;
}