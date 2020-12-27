// A stack is a data structure that holds a list of elements. A stack works based on the LIFO principle i.e., Last In, First out, meaning that the most recently added element is the first one to remove.
// Array Implementation
class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    getLength() {
        return this.count;
    }

    push(item) {
        this.items.push(item);
        this.count = this.count + 1;
    }

    pop() {
        if (this.count > 0) {
            this.count = this.count - 1;
        }

        return this.items.pop();
    }

    peek() {
        return this.items.slice(-1)[0];
    }
}

const stack = new Stack();
stack.push("ankit");
stack.push(10);
console.log(stack);
console.log(stack.pop())

//   Linked List Implementation
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    get length() {
        return this.count;
    }

    addLast(data) {
        // Create a new Node
        const node = {
            data: data,
            next: null
        }

        if (this.count === 0) {
            // If this is the first Node, assign it to head
            this.head = node;
        } else {
            // If not the first node, link it to the last node
            this.tail.next = node;
        }

        this.tail = node;

        this.count++;
    }

    addFirst(data) {
        // Create a new Node
        const node = {
            data: data,
            next: null
        }

        // Save the first Node
        const temp = this.head;

        // Point head to the new Node
        this.head = node;

        // Add the rest of node behind the new first Node
        this.head.next = temp;

        this.count++;

        if (this.count === 1) {
            // If first node, 
            // point tail to it as well
            this.tail = this.head;
        }
    }

    removeFirst(data) {
        if (this.count > 0) {
            // The head should point to the second element
            this.head = this.head.next;

            this.count--;

            if (this.count === 0) {
                // If list empty, set tail to null
                this.tail = null;
            }
        }
    }

    removeLast(data) {
        if (this.count > 0) {
            if (this.count === 1) {
                this.head = null;
                this.tail = null;
            } else {
                // Find the Node right before the last Node
                let current = this.head;
                while (current.next !== this.tail) {
                    current = current.next;
                }

                current.next = null;
                this.tail = current;
            }
        }
    }

    printOut(log) {
        let current = this.head;
        while (current) {
            log(current.data);
            current = current.next;
        }
    }
}

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(item) {
        this.list.addFirst(item);
    }

    pop() {
        if (!this.list.length) {
            return;
        };

        let val = this.list.head.data;
        this.list.removeFirst();

        return val;
    }

    peek() {
        if (!this.list.head) { return; }
        return this.list.head.data;
    }

    get length() {
        return this.list.length;
    }

}

var stack = new Stack();
stack.push(1);
stack.push(5);
stack.push(3);
console.log(stack.peek());
stack.push(2);
stack.pop();
stack.push(7);

