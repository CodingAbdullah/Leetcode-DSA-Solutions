import { StackLinkedList } from './StackLinkedList';

// Implements an increasing/decreasing monotonic stack
// We will implement an increasing monotonic stack
class MonotonicStack {
    monotonicStackList: StackLinkedList | null;

    constructor() {
        this.monotonicStackList = new StackLinkedList();
    }

    // Push item onto the stack
    // We will implement logic to ensure the stack is always increasing
    // Check for base cases
    push(item: number): void {
        if (this.monotonicStackList!.length() === 0) {
            this.monotonicStackList!.push(item);
        }
        else {
            // Retrieve the top element of the stack
            let topItemValue = this.monotonicStackList!.peek();
            
            // Continue removing elements one-by-one
            while (topItemValue !== null && topItemValue >= item) {
                this.monotonicStackList!.pop();
                topItemValue = this.monotonicStackList!.peek();
            }

            // Insert item after removing the necessary items
            this.monotonicStackList!.push(item);
        }
    }

    // Remove and return the latest element on top of the stack
    pop(): number | null {
        return this.monotonicStackList!.pop();
    }

    // Peek at the top of stack
    peek(): number | null {
        return this.monotonicStackList!.peek();
    }
}

export { MonotonicStack };