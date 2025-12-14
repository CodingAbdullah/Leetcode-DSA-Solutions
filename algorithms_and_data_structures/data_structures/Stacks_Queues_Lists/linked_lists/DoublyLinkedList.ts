import { DoublyLinkNode } from "../recursive_data_structures/DoublyLinkNode";

// Implements a doubly linked list with the ability to traverse forwards/backwards
class DoublyLinkedList {
    head: DoublyLinkNode | null;
    tail: DoublyLinkNode | null;

    constructor(){
        this.head = null;
        this.tail = null;
    }

    // Append node to the beginning of the list
    appendFirst(item: number): void {
        if (this.head === null) {
            this.head = this.tail = new DoublyLinkNode(item);
        }
        else {
            let newNode = new DoublyLinkNode(item);
            
            newNode.next = this.head;
            this.head.prev = newNode;

            this.head = newNode;
        }
    }

    // Append to the end of the list
    appendLast(item: number): void {
        if (this.head === null) {
            this.head = this.tail = new DoublyLinkNode(item);
        }
        else {
            // Create new node and append to the end of the list
            // Use the tail node 
            let newNode = new DoublyLinkNode(item);

            this.tail!.next = newNode;
            newNode.prev = this.tail;

            // Update reference
            this.tail = newNode;
        }
    }

    // Remove the first node in the list
    removeFirst(): number | null {
        if (this.head === null) {
            return null;
        }
        else {
            // If only node exists
            if (this.head === this.tail) {
                let value = this.head.value;
                this.head = this.tail = null;

                return value;
            }
            else {
                // Capture value of the head
                // Capture second node using head next pointer
                // Set the previous pointer of the second node to null
                // Set head to the second node
                // Return value
                let value = this.head.value;
                let secondNode = this.head.next;
                
                secondNode!.prev = null;
                this.head = secondNode;

                return value;
            }
        }
    }

    // Remove the last node in the list
    removeLast(): number | null {
        if (this.head === null) {
            return null;
        }
        else {
            // If only one node exists
            if (this.head === this.tail) {
                let value = this.head.value;

                this.head = this.tail = null;
                return value;
            }
            else {
                // Refer the second last node
                // Capture tail node value
                // Set the next pointer of the second last node to null
                // Set tail to point to the second last node
                // Return value
                let secondLastNode = this.tail!.prev;
                let value = this.tail!.value;

                secondLastNode!.next = null;
                this.tail = secondLastNode;

                return value;
            }
        }
    }
}

export { DoublyLinkedList };