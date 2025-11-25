class MyQueue {
    private stackOne: number[];
    private stackTwo: number[];

    // Initialize the stacks
    constructor() {
        this.stackOne = [];
        this.stackTwo = [];
    }

    push(x: number): void {
       this.stackOne.push(x); // Push number to the back of the stack, using the first stack
    }

    pop(): number | undefined {
        while (this.stackOne.length !== 0) {
            let element = this.stackOne.pop();
            this.stackTwo.push(element!); // Pop all elements from the first stack and push to the new stack, reversing order
        }

        let elementPop = this.stackTwo.pop(); // Return the element in reversed order, removing it for display

        while (this.stackTwo.length !== 0) {
            let element = this.stackTwo.pop();
            this.stackOne.push(element!); // Push back all the elements into the first stack
        }

        return elementPop; // Pop the last added element, this will be the front as its reversed
    }

    // Check the top of the Queue and return its value
    peek(): number {
        while (this.stackOne.length != 0) {
            let element = this.stackOne.pop();
            this.stackTwo.push(element!);
        }

        let peekElement = this.stackTwo.length > 0 ? this.stackTwo[this.stackTwo.length - 1] : -1;

        // Reverse order and return back to normal
        while (this.stackTwo.length != 0) {
            let element = this.stackTwo.pop();
            this.stackOne.push(element!);
        }

        return peekElement; // Return the captured element
    }

    // Check to see if Queue is empty (use the first stack because that is all that matters)
    empty(): boolean {
        return this.stackOne.length === 0 ? true : false;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */