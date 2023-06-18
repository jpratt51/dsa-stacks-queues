/** Node: node for a queue. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /** enqueue(val): add new value to end of the queue. Returns undefined. */

    enqueue(val) {
        let newNode = new Node(val);
        if (!this.last) {
            this.first = newNode;
            this.last = newNode;
            this.size = 1;
            return undefined;
        }
        this.last.next = newNode;
        this.last = newNode;
        this.size++;
    }

    /** dequeue(): remove the node from the start of the queue
     * and return its value. Should throw an error if the queue is empty. */

    dequeue() {
        if (!this.first) {
            throw new Error("queue empty");
        }
        const newFirst = this.first.next;
        const oldFirst = this.first;
        this.first = null;
        this.first = newFirst;
        this.size--;
        return oldFirst.val;
    }

    /** peek(): return the value of the first node in the queue. */

    peek() {
        if (this.first) {
            return this.first.val;
        }
    }

    /** isEmpty(): return true if the queue is empty, otherwise false */

    isEmpty() {
        if (!this.first) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Queue;
