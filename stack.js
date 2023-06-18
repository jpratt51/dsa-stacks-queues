/** Node: node for a stack. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /** push(val): add new value to end of the stack. Returns undefined. */

    push(val) {
        let newNode = new Node(val);
        if (!this.last) {
            this.first = newNode;
            this.last = newNode;
            this.size = 1;
            return undefined;
        }
        newNode.next = this.first;
        this.first = newNode;
        this.size++;
    }

    /** pop(): remove the node from the top of the stack
     * and return its value. Should throw an error if the stack is empty. */

    pop() {
        if (!this.last) {
            throw new Error("empty stack");
        }
        const newFirst = this.first.next;
        const oldFirst = this.first;
        this.first = null;
        this.first = newFirst;
        this.size--;
        return oldFirst.val;
    }

    /** peek(): return the value of the first node in the stack. */

    peek() {
        if (this.first) {
            return this.first.val;
        }
    }

    /** isEmpty(): return true if the stack is empty, otherwise false */

    isEmpty() {
        if (!this.first) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Stack;
