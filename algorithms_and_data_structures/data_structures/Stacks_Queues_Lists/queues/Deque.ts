import { DoublyLinkedList } from '../linked_lists/DoublyLinkedList';

// Implementing a Deque data structure using a doubly linked list
// Ensures O(1) time complexity for all operations
// FIFO at both ends of the queue
// Key functions: peekFirst, peekLast, enqueueFront, enqueueBack, dequeueFront, dequeueBack
class Deque {
    dequeList: DoublyLinkedList | null;

    constructor() {
        this.dequeList = new DoublyLinkedList();
    }

    // Add node to the front of the doubly linked list
    enqueueFront(item: number): void {
        this.dequeList!.appendFirst(item);
    }   

    // Add node to the back of the doubly linked list
    enqueueBack(item: number): void {
        this.dequeList!.appendLast(item);
    }

    // Remove the node at the front oft the doubly linked list and return value, if any
    dequeueFront(): number | null {
        return this.dequeList!.removeFirst();
    }

    // Remove the node at the back of the doubly linked list and return value, if any
    dequeueBack(): number | null {
        return this.dequeList!.removeLast();
    }

    // Peek at the front of the doubly linked list and return the head node value if it exists
    peekFront(): number | null {
        return this.dequeList!.head ? this.dequeList!.head.value : null;
    }

    // Peek at the back of the doubly linked list and return the tail node value if it exists
    peekBack(): number | null {
        return this.dequeList!.tail ? this.dequeList!.tail.value : null;
    }
}

export { Deque };