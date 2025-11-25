class Queue {
    private items: any[]; // Follow a FIFO principle

    // Initialize an array with a single element if provided
    constructor(initElement? : any) {
        this.items = initElement !== undefined ? [initElement] : [];
    }

    // Insertion of an element is enqueue
    enqueue(item: any): void { 
        this.items.push(item);
    }

    // Removal of an element from the front of the queue
    dequeue(): any {
        return this.items.shift();
    }

    peek(): any {
        return this.items[0]; // If it exists
    }

    // Return the size of the Queue
    size(): number {
        return this.items.length;
    }

    // Check to see the size of the Queue and check if its empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Print all elements of the Queue
    print(): void {
        console.log(this.items);
    }

    // Clear the queue completely
    clear(): void {
        this.items = [];
    }

    // Search for any element inside the Queue to see if it exists
    search(item: any): number {
        return this.items.indexOf(item);
    }
}

// Example usage:
let q = new Queue(5); // [5]
q.enqueue(10); // [5, 10]
q.dequeue(); // [10]
q.peek();
q.print(); // [10]