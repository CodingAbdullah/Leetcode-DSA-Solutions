class Stack {
    private items: any[];

    // Constructor for initializing a Stack data structure
    constructor(initElement?: any) {
        this.items = initElement !== undefined ? [initElement] : [];
    }

    // Method for pushing an element onto the Stack
    push(item: any): void {
        this.items.push(item);
    }

    // Method for popping an element off the Stack
    pop(): any {
        return this.items.pop();
    }

    // Method for peeking at the top element of the Stack
    peek(): any {
        return this.items[this.items.length - 1];
    }

    // Method for clearing the Stack
    clear(): void {
        this.items = [];
    }

    // IsEmpty method for checking if the Stack is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Size method for checking the number of elements in the Stack
    size(): number {
        return this.items.length;
    }

    // Print method for printing the Stack
    print(): void {
        console.log(this.items);
    }

    // Search method for finding the index of an element in the Stack
    search(item: any): number {
        return this.items.indexOf(item);
    }
}

// Example usage:
let s = new Stack(10); // [10]
console.log(s.peek()); // 10
s.push(20); // [10, 20]
s.print(); // [10, 20]
s.pop(); // [10]
s.print(); // [10]