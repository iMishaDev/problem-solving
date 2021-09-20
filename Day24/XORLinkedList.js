/**
 * 
 * An XOR linked list is a more memory efficient doubly linked list. 
 * Instead of each node holding next and prev fields, 
 * it holds a field named both, which is an XOR of the next node and the previous node. 
 * Implement an XOR linked list; it has an add(element) which adds the element to the end,
 * and a get(index) which returns the node at index.

If using a language that has no pointers (such as Python), 
you can assume you have access to get_pointer and dereference_pointer 
functions that converts between nodes and memory addresses.
 */

class Node {
    constructor(){
        this.both = 0;
        this.value = null;
    }

    get_pointer(){}

}

class LinkedList {
    constructor(){
        this.head = this.tail = null;
    }

    add(node){
        if(this.head){
            this.head.both = this.head.both ^ node.get_pointer();
            node.both = this.head.get_pointer();
            this.head = node;
        } else {
            this.head = this.tail = node;
        }
    }

    get(index){
        let i = 0;
        let current = this.head;
        prev_pointer = 0;
        while(i < index){
            current = current.both ^ prev_pointer
            prev_pointer = current.both;
            i += 1;
        }
        return current;
    }
}