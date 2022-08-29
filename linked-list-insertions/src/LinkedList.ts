import { Collection, display } from "./Collection";

interface Node<T> {
  data: T,
  next: Node<T> | undefined;
}
export class LinkedList<T> implements Collection<T> {
  zip(ll1: LinkedList<T>, ll2: LinkedList<T>): LinkedList<T> {
    throw new Error("Method not implemented.");
  }
  static zip<T>(ll1: LinkedList<T>, ll2: LinkedList<T>): LinkedList<T> {
    const zipped = new LinkedList<T>();
    let ll1h = ll1.start;
    let ll2h = ll2.start;
    while (ll1h || ll2h) {
      if (ll1h) {
        zipped.append(ll1h.item);
        ll1h = ll1h.next;
      }
      if (ll2h) {
        zipped.append(ll2h.item);
        ll2h = ll2h.next;
      }
    }
    return zipped;
  }

export class LinkedList<T> implements Collection<T> {
  head: Node<T> | undefined;
  start: any;
  insert(value: T): void {
    let newNode: Node<T> = {
      data: value,
      next: this.head,
    };
    newNode.next = this.head;
    this.head = newNode;
  }
  includes(value: T): boolean {
    let current = this.head;
    while (current != undefined){
      if(current.data === value){
        return true;
      }
      current = current.next;
    }
    return false;
  }
  toString(): string {
    let current = this.head;
    let str = '';
    while (current != undefined){
      str += `{ ${display(current.data)} } -> `;
      current = current.next;
    };
    str += "NULL";
    return str;
  }
  append(value: T): void {
    const newNode = {
      item: value,
      next: undefined,
    };
    let lastNode = this.start;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = newNode;
    }
  }

  insertBefore(needle: T, value: T) {
    let tracker = this.start;
    let found = false;
    while (tracker !== undefined) {
      // check for first node
      if (tracker.item === needle && found === false) {
        found = true;
        let shiftedNode = tracker;
        const newNode = {
          item: value,
          next: shiftedNode,
        };
        this.start = newNode;
      }

      if (tracker.next?.item === needle && found === false) {
        found = true;
        let shiftedNode = tracker.next;
        const newNode = {
          item: value,
          next: shiftedNode,
        };
        tracker.next = newNode;
      }
      tracker = tracker.next;
    }
  }

  insertAfter(needle: T, value: T) {
    let tracker = this.start;
    while (tracker !== undefined) {
      if (tracker.item === needle) {
        let shiftedNode = tracker.next;
        const newNode = {
          item: value,
          next: shiftedNode,
        };
        tracker.next = newNode;
      }
      tracker = tracker.next;
    }
  }
}
kthFromEnd(k: number): any {
  let tracker = this.start;
  let size = this.size(); //see line 123
  //this is checking if the value of k is not more than length of the linked list or if k is less 0 which would make it a negative. we dont want to work with negative numbers
  //edge case here
  if (k > size || k < 0) {
    throw new Error(
      "That kth value is more than the values in the linked list."
    );
  }

  while (k <= size) {
    let len = size - k;
    for (let i = 0; i < len; i++) {
      tracker = tracker?.next;
    }
    return tracker?.item;
  }
}
//this counts the number of nodes in the linked list
size(): number {
  let counter = 0;
  let tracker = this.start;
  while (tracker != undefined) {
    tracker = tracker.next;
    counter++;
  }
  return counter;
  }
  // zipLists();
}