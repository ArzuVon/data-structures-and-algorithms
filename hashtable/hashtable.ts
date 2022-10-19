interface Node<V> {
  key: string;
  value: V;
  next: Node<V> | undefined;
}

// Your linked list from earlier labs
class LinkedList<K, V> {
  start: Node<V> | undefined;

  insert(key: string, value: V): void {
    const newNode: Node<V> = {
      key: key,
      value: value,
      next: this.start,
    };
    this.start = newNode;
  }
}

export class HashTable<V> {
  private data: Array<LinkedList<string, V>>;

  constructor(readonly capacity: number) {
    this.data = new Array(this.capacity);
  }

  get(key: string): V | never {
    // |never means this will throw if the key is not present
    const hash: number = this.hash(key);
    let data = this.data[hash];
    if (!data) throw new Error();
    let tracker = data.start;
    while (tracker !== undefined) {
      if (key === tracker.key) return tracker.value;
      tracker = tracker.next;
    }
    throw new Error();
  }

  set(key: string, value: V): void {
    const hash = this.hash(key);
    if (!this.data[hash]) this.data[hash] = new LinkedList<string, V>();
    let tracker = this.data[hash].start;
    let found = false;
    while (tracker !== undefined) {
      if (key === tracker.key) {
        tracker.value = value;
        found = true;
      }
      tracker = tracker.next;
    }
    if (!found) this.data[hash].insert(key, value);
  }

  has(key: string): boolean {
    const hash = this.hash(key);
    let data = this.data[hash];
    if (!data) return false;
    let tracker = data.start;
    while (tracker !== undefined) {
      if (key === tracker.key) return true;
      tracker = tracker.next;
    }
    return false;
  }

  keys(): string[] {
    const keys: string[] = [];
    for (const list of this.data) {
      let tracker = list.start;
      while (tracker !== undefined) {
        keys.push(tracker.key);
        tracker = tracker.next;
      }
    }
    console.log("keys: ", keys);
    return keys;
  }

  hash(key: string): number {
    return (
      key
        .split("")
        .map((c: string) => c.charCodeAt(0))
        .reduce((a: number, b: number) => a + b) % this.data.length
    );
  }
}
