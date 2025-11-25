class DynamicArray {
    arrayList: any[];
    N: number = 0; // Used to track the number of items inside the array

    constructor(size: number) {
        this.arrayList = new Array(size); // Initialize an empty array of a given size
    }

    push(item: any): void {
        if (this.N === this.arrayList.length) {
            this.resize(this.arrayList.length === 0 ? 1 : this.arrayList.length * 2); // Double the size of the array if it's full
            this.arrayList[this.N] = item; // Add the new item to the end of the array
            this.N++; // Increment the number of items inside the array            
        }
        else {
            this.arrayList[this.N] = item; // Add the new item to the end of the array
            this.N++; // Increment the number of items inside the array
        }
    }

    // Resize the array to be double the size of the original array if limit is reached
    private resize(newSize: number): void {
        let newArray: any[] = new Array(newSize);

        // Populate all items from old array to new array
        for (let i = 0; i < this.N; i++) {
            newArray[i] = this.arrayList[i];
        }

        this.arrayList = newArray; // Point the old array reference to the new array
    }

    pop(): any {
        if (this.N === 0) {
            return null;
        }
        else {
            let element = this.arrayList[this.N - 1]; // Get the last element
            this.arrayList[this.N - 1] = undefined; // Remove the last element
            
            this.N -= 1; // Decrement the number of items inside the array
            return element;
        }
    }
}