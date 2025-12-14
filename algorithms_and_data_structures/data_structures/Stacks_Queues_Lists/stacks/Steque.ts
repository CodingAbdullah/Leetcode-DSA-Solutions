import { DoublyLinkedList } from '../linked_lists/DoublyLinkedList';

// Implements LIFO at the front and only enqueue (queue insertions) at the back
// Utilizes the doubly linked list data structure
// Supported operations: enqueueBack, push, pop, peekFront, peekBack
// Front: Stack (push/pop)
// Back: Queue (enqueue only)
class Steque {
    stequeList: DoublyLinkedList | null;

    constructor() {
        this.stequeList = new DoublyLinkedList();
    }

    // Add items to the front of the Steque
    push(item: number): void {
        this.stequeList!.appendFirst(item);
    }

    // Remove items from the front of Steque
    pop(): number | null {
        return this.stequeList!.removeFirst();
    }

    // Add items to the back of the Steque
    enqueueBack(item: number) {
        this.stequeList!.appendLast(item);
    }

    // Peek at the front of the Steque
    peekFront(): number | null {
        return this.stequeList!.head ? this.stequeList!.head.value : null;
    }

    // Peek at the back of the Steque
    peekBack(): number | null {
        return this.stequeList!.tail ? this.stequeList!.tail.value : null;
    }
}

export { Steque };