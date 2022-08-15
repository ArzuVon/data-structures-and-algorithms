import { Collection, display } from "./Collection";

// ES5 prototype
// const LinkedList = function() {};
// LinkedList.prototype.insert(item) {};

// class
// interface

// Three parts of a variable:
// let name: type = value;
interface Node<T> {
  data: T,
  next: Node<T> | undefined;
}
export class LinkedList<T> implements Collection<T> {
  head: Node<T> | undefined;
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