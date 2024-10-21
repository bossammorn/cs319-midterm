// Part 4
export class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item)
    }

    dequeue(): T | undefined{
        return this.items.shift();
    }
}