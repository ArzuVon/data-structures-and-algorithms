export class Queue<T> {
  get size(): number {
    throw new Error("Not implemented");
  }

  get peek(): T {
    throw new Error("Not implemented");
  }

  enqueue(t: T): void {
    throw new Error("Not implemented");
  }

  dequeue(): T {
    throw new Error("Not implemented");
  }
}
