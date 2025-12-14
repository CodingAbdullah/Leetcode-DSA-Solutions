import { DoublyLinkNode } from "../recursive_data_structures/DoublyLinkNode";

// Implements a circular doubly linked list
// Idea is the same as a circular singly linked list, except we can traverse backwards
// Four methods: appendFirst, appendLast, removeFirst, removeLast
class DoublyCircularLinkedList {
    head: DoublyLinkNode | null;
    tail: DoublyLinkNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Append node at the beginning of the list
    // If only one node exists
    // Create the new node
    // Update the references of the old head to point to this new node
    // Set old head to new head
    // Set head and tail pointers to point to each other
    appendFirst(item: number): void {
        if (this.head === null) {
            this.head = this.tail = new DoublyLinkNode(item);
            this.head.prev = this.head.next = this.head;
        }
        else {
            let newNode = new DoublyLinkNode(item);
            
            newNode.next = this.head;
            this.head.prev = newNode;

            this.head = newNode;
            
            this.tail!.next = this.head;
            this.head.prev = this.tail;
        }
    }

    // Append node at the end of the linked list
    // Create new node if none exists
    // Set the old tail next pointer to new node
    // Assign tail to become new tail
    // Set head/prev, tail/next pointers, respectively
    appendLast(item: number): void {
        if (this.head === null) {
            this.head = this.tail = new DoublyLinkNode(item);
            this.head.prev = this.head.next = this.head;
        }
        else {
            let newNode = new DoublyLinkNode(item);
            this.tail!.next = newNode;
            newNode.prev = this.tail;

            this.tail = newNode;

            this.tail.next = this.head;
            this.head.prev = this.tail;
        }
    }

    // Remove the first node in the linked list
    // Capture value of the head
    // Point head to be the next node
    // Reset the pointers of the head and tail nodes to point to each other from the second node
    // Return value
    removeFirst(): number | null {
        if (this.head === null) {
            return null;
        }
        else {
            // If only one element exists, remove it, return value
            if (this.head === this.tail) {
                let value = this.head.value;
                this.head = this.tail = null;

                return value;
            }
            else {
                let value = this.head.value;
                this.head = this.head.next;

                this.head!.prev = this.tail;
                this.tail!.next = this.head;

                return value;
            }
        }
    }

    // Remove the last node in the linked list
    // If only one node exists, remove head/tail and return value
    // If more than one exists, reference the second last node
    // Set its next pointer to become the head, while capturing the tail node value
    // Set the tail to be the new tail and change the tail/next, head/prev pointers, return value
    removeLast(): number | null {
        if (this.head === null) {
            return null;
        }
        else {
            // If only one element exists, remove it, return value
            if (this.head === this.tail) {
                let value = this.head.value;

                this.head = this.tail = null;
                return value;
            }
            else {
               let nodeValue = this.tail!.value;
               let secondLastNode = this.tail!.prev;
               
               secondLastNode!.next = this.head;
               this.tail = secondLastNode;

               this.head.prev = this.tail;
               return nodeValue;
            }
        }
    }
}

export { DoublyCircularLinkedList };