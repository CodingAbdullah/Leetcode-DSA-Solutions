// Implementing a Queue using Two Stacks which implement Linked Lists
import { StackLinkedList } from "../stacks/StackLinkedList";

class TwoStackQueue {
    stackOne: StackLinkedList;
    stackTwo: StackLinkedList;

    // Initialize the two stacks
    constructor() {
        this.stackOne = new StackLinkedList();
        this.stackTwo = new StackLinkedList();
    }

    enqueue(item: number): void {
        this.stackOne.push(item); // Push items to first stack, make pop more expensive
    }

    dequeue(): number | null {
        if (this.stackOne.length() === 0) {
            return null;
        }
        else {
            // Swap out all items from the first stack to the second stack
            // Remove the last element from the second stack
            // Empty out the second stack and re-populate the first stack
            while (this.stackOne.length() !== 0) {
                let stackOneElement = this.stackOne.pop();
                this.stackTwo.push(stackOneElement!);
            }

            let returnItem = this.stackTwo.pop(); // Pop the last element from the second stack

            // Swap stacks and return to original state
            let temp = this.stackOne;
            this.stackOne = this.stackTwo;
            this.stackTwo = temp;

            return returnItem;
        }
    }

    peek(): number | null {
        if (this.stackOne.length() === 0) {
            return null;
        }
        else {
            // Transfer out all the items from stack one to stack two
            while (this.stackOne.length() !== 0) {
                let stackOneElement = this.stackOne.pop();
                this.stackTwo.push(stackOneElement!);
            }

            while (this.stackTwo.length() !== 1) {
                let stackTwoElement = this.stackTwo.pop();
                this.stackOne.push(stackTwoElement!); // Push back all items to stack one
            }

            // Peek the last element from stack two
            let peekItem = this.stackTwo.pop();
            this.stackOne.push(peekItem!); // Push back the peeked item to stack one, stacks order restored

            return peekItem;
        }
    }

    // Return the length of the Queue
    length(): number {
        return this.stackOne.length();
    }

    isEmpty(): boolean {
        return this.stackOne.length() === 0;
    }
}

export { TwoStackQueue };