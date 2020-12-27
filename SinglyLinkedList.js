// Singly linked list data structure 
// LinkedList is the dynamic data structure, as we can add or remove vals at ease, and it can even grow as needed. Just like arrays, linked lists store vals sequentially, but don’t store the vals contiguously like an array.
// User defined class node 
class Node {
    // constructor 
    constructor(val) {
        this.val = val;
        this.next = null
    }
}


// linkedlist class 
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // functions to be implemented 
    // add(val) 
    // adds an val at the end 
    // of list 
    push(val) {
        // creates a new node 
        var node = new Node(val);

        // to store current node 
        var current;

        // if list is Empty add the 
        // val and make it head 
        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;

            // iterate to the end of the 
            // list 
            while (current.next) {
                current = current.next;
            }

            // add node 
            current.next = node;
        }
        this.size++;
    }

    // insertAt(val, location) 
    // insert val at the position index 
    // of the list 
    insertAt(val, index) {
        if (index > 0 && index > this.size)
            return false;
        else {
            // creates a new node 
            var node = new Node(val);
            var curr, prev;

            curr = this.head;

            // add the val to the 
            // first index 
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;

                // iterate over the list to find 
                // the position to insert 
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an val 
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    // removeFrom(location) 
    // removes an val from the 
    // specified location 
    removeFrom(index) {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting first val 
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the 
                // position to removce an val 
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the val 
                prev.next = curr.next;
            }
            this.size--;

            // return the remove val 
            return curr.val;
        }
    }

    // removeval(val) 
    // removes a given val from the 
    // list 
    removeval(val) {
        var current = this.head;
        var prev = null;

        // iterate over the list 
        while (current != null) {
            // comparing val with current 
            // val if found then remove the 
            // and return true 
            if (current.val === val) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.val;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    // Helper Methods 
    // finds the index of val 
    indexOf(val) {
        var count = 0;
        var current = this.head;

        // iterae over the list 
        while (current != null) {
            // compare each val of the list 
            // with given val 
            if (current.val === val)
                return count;
            count++;
            current = current.next;
        }

        // not found 
        return -1;
    }

    // isEmpty 
    // checks the list for empty 
    isEmpty() {
        return this.size == 0;
    }

    // size_Of_List 
    // gives the size of the list 
    size_of_list() {
        console.log(this.size);
    }

    // PrintList 
    // prints the list items 
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.val + " ";
            curr = curr.next;
        }
        console.log(str);
    }

}

var list = new LinkedList()
list.push("Ankit");
list.push("Tanya");
list.push("Will be deleted");
list.printList();
const ankit = list.indexOf("Ankit")
console.log(ankit)