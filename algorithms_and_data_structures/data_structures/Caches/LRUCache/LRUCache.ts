import DoublyCacheLinkNode from './DoublyCacheLinkNode';
import DoublyCacheLinkedList from './DoublyCacheLinkedList';

// Implements the LRU cache using a doubly linked list and a hash map
class LRUCache {
    cacheSize: number;
    cacheMap: Map<string, DoublyCacheLinkNode>;
    cacheOrderList: DoublyCacheLinkedList;

    // Initialize the properties
    constructor(size: number) {
        this.cacheSize = size < 0 ? 0 : size;
        this.cacheMap = new Map<string, DoublyCacheLinkNode>();
        this.cacheOrderList = new DoublyCacheLinkedList();
    }

    // Retrieve the requested node ---> get(key)
    // Utilize the key, check the hash map for its existence
    // If it does, delete node from current position, move it to first
    // Return the value of the captured node
    retrieveKey(key: string): number | undefined {
        if (this.cacheMap.has(key)) {
            let node = this.cacheMap.get(key);

            this.cacheOrderList.deleteNode(node!);
            this.cacheOrderList.moveFirst(node!);

            return node!.value;
        }
        else {
            return undefined;
        }
    }

    // Insert/Update ---> put(key, value)
    // Check if the key exists, if so, we update
    // Delete node from current position
    // Move the node to first
    // Update the node value
    // For new insertions, check if cache limit has been reached
    // If so, evict the last node, return the node, capture its key and delete from hash map
    // Insert the new node at the beginning
    insertKey(key: string, value: number): void {
        if (this.cacheMap.has(key)){
            let retriveNode = this.cacheMap.get(key);
            
            this.cacheOrderList.deleteNode(retriveNode!);
            this.cacheOrderList.moveFirst(retriveNode!);

            // Set the updated value of the node to the node
            retriveNode!.value = value;
        }
        else {
            // Eviction, capture the node and delete the key
            if (this.cacheMap.size === this.cacheSize) {
                let evictNode = this.cacheOrderList.deleteLast();
                this.cacheMap.delete(evictNode!.key);

                let newNode = this.cacheOrderList.appendFirst(key, value);
                this.cacheMap.set(key, newNode);
            }
            else {
                // Normal insertion
                let newNode = this.cacheOrderList.appendFirst(key, value);
                this.cacheMap.set(key, newNode);
            }
        }
    }

    // Delete a key and return its value ---> delete(key)
    // Check the hash map for such key existence
    // If so, capture the node and its value to be returned
    // Delete the node and delete the key from the hash map
    // Return the node value
    deleteKey(key: string): number | undefined {
        if (this.cacheMap.has(key)) {
            let deleteNode = this.cacheMap.get(key);
            let deleteNodeValue = deleteNode!.value;

            this.cacheOrderList.deleteNode(deleteNode!);
            this.cacheMap.delete(key);

            return deleteNodeValue;
        }
        else {
            return undefined;
        }
    }
}

export default LRUCache;