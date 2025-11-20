import { QueueLinkedList } from "./QueueLinkedList"

// Implementing a Stack using two Queues which implement LinkedLists behind the scenes
class TwoQueueStack {
    queueOne: QueueLinkedList;
    queueTwo: QueueLinkedList;

    // Initialize the TwoQueueStack data type
    constructor() {
        this.queueOne = new QueueLinkedList();
        this.queueTwo = new QueueLinkedList();
    }

    // Push all items onto queueOne, make pop() more expensive
    push(item: number): void {
        this.queueOne.enqueue(item);
    }

    pop(): number | null {
        if (this.queueOne.length() === 0) {
            return null;
        }
        else {
            // Push item to the other queue to maintain order, repeat until one element is left
            while (this.queueOne.length() !== 1) {
                let topitem = this.queueOne.dequeue();
                this.queueTwo.enqueue(topitem!);
            }

            // The last element is the one to be popped
            let finalItem = this.queueOne.dequeue();

            let temp = this.queueOne; // Temporary variable to hold queueOne
            this.queueOne = this.queueTwo; // Swap the names of the queues
            this.queueTwo = temp;

            return finalItem;
        }
    }

    peek(): number | null {
        if (this.queueOne.length() === 0 ) {
            return null;
        }
        else {
            while (this.queueOne.length() !== 1) {
                let topItem = this.queueOne.dequeue();
                this.queueTwo.enqueue(topItem!);
            }

            let finalItem = this.queueOne.dequeue(); // Store and return the final item in the queue
            this.queueTwo.enqueue(finalItem!); // Re-enqueue the final item to maintain stack state

            let temp = this.queueOne; // Temporary variable to hold queueOne
            this.queueOne = this.queueTwo; // Swap the names of the queues
            this.queueTwo = temp;

            return finalItem;
        }
    }

    // Return the length of the first queue
    length(): number {
        return this.queueOne.length();
    }

    // Check whether the first queue is empty or not
    isEmpty(): boolean {
        return this.queueOne.length() === 0;
    }
}

export { TwoQueueStack };