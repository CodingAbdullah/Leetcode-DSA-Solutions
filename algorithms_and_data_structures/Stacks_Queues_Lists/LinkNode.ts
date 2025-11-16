// Link Node recurse structure for linked lists, Queues, and Stacks
class LinkNode {
    item: number;
    next: LinkNode | null;

    constructor(item: number) {
        this.item = item;
        this.next = null;
    }
}

export { LinkNode };