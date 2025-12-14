import { LinkedList } from "../linked_lists/LinkedList";

// LIFO implementation
// Implementing the Stack data structure using a singly linked list
class StackLinkedList {
    private stackLinkedList: LinkedList;

    // Initialize an empty Stack implementing a linked list
    constructor() {
        this.stackLinkedList = new LinkedList();
    }

    // Peek at the top of stack
    peek(): number | null {
        return this.stackLinkedList.head ? this.stackLinkedList.head.item : null;
    }

    // Push items to the end of the list
    push(item: number): void {
        this.stackLinkedList.appendFirst(item);
    }

    // Pop items from the end of the list
    pop(): number | null {
        return this.stackLinkedList.removeFirst();
    }

    // Print all items in the stack
    print(): void {
        this.stackLinkedList.printList();
    }

    // Return the length of the stack
    length(): number {
        return this.stackLinkedList.length();
    }
}

export { StackLinkedList };