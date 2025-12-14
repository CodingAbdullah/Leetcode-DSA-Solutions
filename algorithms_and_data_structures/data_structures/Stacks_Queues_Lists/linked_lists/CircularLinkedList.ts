import { LinkNode } from "../recursive_data_structures/LinkNode";

// Singly Circular Linked list implements a singly linked list with the tail pointing to the head
// Only forward tranversals, no backwards in a singly circular linked list
// Primary operations: appendfirst(), appendLast(), deleteFirst(), deleteLast()
class CircularLinkedList {
    head: LinkNode | null;

    constructor() {
        this.head = null;
    }

    // Append new node to the front
    appendFirst(item: number): void {
        if (this.head === null) {
            this.head = new LinkNode(item);
        }
        else {
            // If only one exists
            if (this.head.next === this.head) {
                let newNode = new LinkNode(item);
                newNode.next = this.head;

                this.head = newNode;
            }
            else {
                let tail = this.head;

                // Traverse to the end of the circular linked list
                while (tail.next !== this.head) {
                    tail = tail.next!;
                }

                // Create the new node and assign its next pointer to point to the old head
                let newNode = new LinkNode(item);
                newNode.next = this.head;

                // Set old head to new head and point the tail back to the new head
                this.head = newNode;
                tail.next = this.head;
            }
        }
    }

    // Append new node at the end of the list
    appendLast(item: number): void {
        if (this.head === null) {
            this.head = new LinkNode(item);
        }
        else {
            // If only one node exists
            if (this.head.next === this.head) {
                let newNode = new LinkNode(item);

                // Assign new node pointer to point back to head
                // Assign the head next pointer to point to new node
                newNode.next = this.head;
                this.head.next = newNode;
            }
            else {
                // Traverse to the end of the list
                let tail = this.head!;

                while (tail.next !== this.head){
                    tail = tail.next!;
                }

                // Create the new node and updated references for the tail and the new node
                let newNode = new LinkNode(item);

                tail.next = newNode;
                newNode.next = this.head;
            }
        }
    }

    // Remove the first node from the list
    removeFirst(): number | null {
        if (this.head === null) {
            return null;
        }
        else {
            // If only one node exists
            if (this.head.next === this.head) {
                let value = this.head!.item;
                this.head = null; // Remove head and return value

                return value;
            }
            else {
                // Traverse to the end
                let tail = this.head;

                while (tail.next !== this.head) {
                    tail = tail.next!;
                }

                // Capture value, change reference of head to point to the next node
                // Ensure tail points back to the new head
                // Return value
                let value = this.head.item;
                this.head = this.head.next;
                tail.next = this.head;

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
            if (this.head.next === this.head) {
                let value = this.head.item;

                this.head = null;
                return value;
            }
            else {
                // Traverse to the end of the list
                let prevNode = this.head;
                let currNode = this.head.next;

                while (currNode!.next !== this.head) {
                    prevNode = currNode!;
                    currNode = currNode!.next!;
                }
                
                // Capture and return value
                let value = currNode!.item;
                prevNode.next = this.head; // Remove reference to current node and point back to head

                return value;
            }
        }
    }
}

export { CircularLinkedList };