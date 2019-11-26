/**
 * Design a data structure with methods that accepts integers 
 * and returns first unique integer present in the stream
 */

class Node {
    constructor(val) {
        this.val = val;
        this.prev = this.next = null;
    }
}
// Doubly Linked List
class DLL {
    constructor() {
        this.head = new Node(-1);
        this.tail = new Node(-1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.count = 0;
    }
    add(val) {
        let node = new Node(val);
        node.prev = this.tail.prev;
        node.next = this.tail;

        this.tail.prev.next = node;
        this.tail.prev = node;
        this.count++;
        return node;
    }
    remove(node) {
        let [prev, next] = [node.prev, node.next];
        [node.next.prev, node.prev.next] = [prev, next];
        
        this.count--;
    }
    isEmpty() {
        return this.count === 0;
    }
}

class Stream {
    constructor() {
        // using doubly linked list to optimize time complexity 
        // of getFirstUnique method to O(1)
        this.stream = new DLL();
        // this.stream = new Array();
        this.uniqueMap = new Map();
    }
    // Time Complexity - O(1)
    add(number) {
        if(this.uniqueMap.has(number) && this.uniqueMap.get(number) != -1) {
            // remove from stream
            this.stream.remove(this.uniqueMap.get(number));
            // update node to store -1
            this.uniqueMap.set(number, -1);
        } else {
            let node = this.stream.add(number);
            this.uniqueMap.set(number, node);
        }
    }
    // Time Complexity - O(1)
    getFirstUnique() {
        if(this.stream.isEmpty()) {
            return null;
        }
        // Get first unique node - O(1)
        return this.stream.head.next.val;
    }
    // Traversal - O(n) with stream as Array
    // for (const num of this.stream) {
    //     if(this.uniqueMap.get(number)) {
    //         return num;
    //     }
    // }
}
