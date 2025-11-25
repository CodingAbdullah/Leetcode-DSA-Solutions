import { LinkNode } from "./LinkNode";

// Implementing a LinkedList
class LinkedList {
    head: LinkNode | null;

    constructor(initialItem?: number) {
        this.head = initialItem !== undefined ? new LinkNode(initialItem) : null;
    }

    appendFirst(item: number): void {
        const newNode = new LinkNode(item);

        // Check to see if the list is empty
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            // Create the new node, add reference to the old and assign head to this list
            let headNode = this.head;

            newNode.next = headNode;
            this.head = newNode;
        }
    }

    appendLast(item: number): void {
        let newNode = new LinkNode(item);

        // Check to see if the list is empty
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            let traverseNode = this.head;

            while (traverseNode.next !== null) {
                traverseNode = traverseNode.next;
            }

            traverseNode.next = newNode; // Assign the new node to the end of the list
        }
    }

    removeLast(): number | null {
        if (this.head === null) {
            return null;
        }
        else {
            let prevNode = this.head;
            let nextNode = this.head.next;

            if (nextNode === null) {
                let returnItem = this.head.item;
                this.head = null;
                
                return returnItem; // Return said item value after removing it from linked list
            }
            else {
                while (nextNode!.next !== null) {
                    prevNode = nextNode!;
                    nextNode = nextNode.next;
                }

                let nodeValue = nextNode!.item;
                prevNode.next = null; // Remove the last node

                return nodeValue; // Return the removed node's value
            }
        }
    }

    removeFirst(): number | null {
        if (this.head === null) {
            return null;
        }
        else {
            let returnItem = this.head.item; // Change reference to next node
            this.head = this.head.next;

            return returnItem; // Return the removed node's value
        }
    }

    // Print the Linked List items
    printList(): void {
        let tranverseNode = this.head;
        let listPrint = "";

        if (tranverseNode === null) {
            console.log("{ }");
        }
        else {
            let item = tranverseNode.item;
            listPrint += `{ ${item} }`;

            // Traverse through Linked List and print items
            while (tranverseNode.next !== null) {
                tranverseNode = tranverseNode.next;
                listPrint += ` -> { ${tranverseNode.item} }`;
            }

            console.log(listPrint);
        }
    }

    // Count the number of elements inside a Linked List
    length() : number {
        if (this.head === null ){
            return 0;
        }
        else {
            let traverseNode = this.head;
            let count = 1;

            while (traverseNode.next !== null) {
                traverseNode = traverseNode.next;
                count += 1;
            }

            return count;
        }
    }
}

export { LinkedList };