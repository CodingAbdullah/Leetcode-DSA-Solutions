class DoublyLinkNode {
    prev: DoublyLinkNode | null;
    next: DoublyLinkNode | null;
    value: number;

    constructor(item: number) {
        this.prev = null;
        this.next = null;
        this.value = item;
    }
}

export { DoublyLinkNode };