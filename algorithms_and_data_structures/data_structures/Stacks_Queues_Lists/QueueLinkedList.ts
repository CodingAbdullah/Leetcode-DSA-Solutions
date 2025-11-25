import { LinkedList } from "./LinkedList";

// Queue data structure implemented using Linked List
// FIFO implementation
// 1, 1->2, 1->2->3, 2->3, 3
class QueueLinkedList {
    private queueList: LinkedList;

    constructor() {
        this.queueList = new LinkedList(); // Initalize an empty Linked List
    }

    // Check the front item of the queue without removing it
    peek(): number | null {
        let queueHead = this.queueList.head;

        if (queueHead !== null) {
            return queueHead.item;
        }
        else {
            return null;
        }
    }

    // Add an item to the front of the queue
    enqueue(item: number): void {
        this.queueList.appendLast(item);
    }

    // Remove an item from the front of the queue and return it
    dequeue(): number | null {
        return this.queueList.removeFirst();
    }

    // Print all the items inside the queue
    print(): void {
        this.queueList.printList();
    }

    // Return the length of the queue
    length(): number {
        return this.queueList.length();
    }
}

export { QueueLinkedList };