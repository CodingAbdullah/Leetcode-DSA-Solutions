class MinStack {
    stack;
    minValue;

    constructor() {
        this.stack = [];
        this.minValue = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop(); // Pop item from the top of the stack
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]; // Return the top element of the stack
    }

    /**
     * @return {number}
     */
    getMin() {
        let tempStack: number[] = [];
        this.minValue = Infinity;
        while (this.stack.length != 0) {
            let element = this.stack.pop(); // Pop the element inside the stack

            // Run comparison
            if (element < this.minValue) {
                this.minValue = element;
            }
            
            tempStack.push(element); // Push element onto temp stack
        }

        // Repopulate old stack with all the items re-pushed
        while (tempStack.length != 0) {
            let element = tempStack.pop();
            this.stack.push(element);
        }

        return this.minValue;
    }
}