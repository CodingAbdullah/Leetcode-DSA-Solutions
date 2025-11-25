import { LinkedList } from "./LinkedList";

class StackLinkedList {
    private stackLinkedList: LinkedList;

    // Initialize an empty Stack implementing a Linked List
    constructor() {
        this.stackLinkedList = new LinkedList(); // Initialize an empty Linked List
    }

    push(item: number): void {
        this.stackLinkedList.appendFirst(item); // Push items to the end of the list
    }

    pop(): number | null {
        return this.stackLinkedList.removeFirst(); // Pop items from the end of the list
    }

    print(): void {
        this.stackLinkedList.printList(); // Print all items in the stack
    }

    length(): number {
        return this.stackLinkedList.length(); // Return the length of the stack
    }
}

export { StackLinkedList };