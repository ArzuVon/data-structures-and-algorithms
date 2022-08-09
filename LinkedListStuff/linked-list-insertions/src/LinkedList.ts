import { Collection, display } from "./Collection";

// ES5 prototype
// const LinkedList = function() {};
// LinkedList.prototype.insert(item) {};

// class
// interface

// Three parts of a variable:
// let name: type = value;

export class LinkedList<T> implements Collection<T> {
  start: Node<T> | undefined; // or head

  insert(item: T) {
    this.start = {
      item: item,
      next: this.start,
    };
  }

  includes(item: T): boolean {
    // What is the first item?
    // this.start
    let tracker = this.start;

    // if (tracker?.item === item) {
    //   return true;
    // }
    // // check the second item
    // if (tracker?.next?.item === item) {
    //   return true;
    // }
    // // check the third item
    // if (tracker?.next?.next?.item === item) {
    //   return true;
    // }
    // // check the fourth item
    // if (tracker?.next?.next?.next?.item === item) {
    //   return true;
    // }
    while (tracker !== undefined /* there is a value */) {
      // do this thing
      if (tracker.item === item) {
        return true;
      }
      // move forward
      tracker = tracker.next;
    }

    // What is the last thing to do?
    return false;
  }

  toString(): string {
    // For each item
    //   get its string using `display(item)`
    //   Put it inside { }
    //   Put an arrow between all items
    //   End the entire list with a "NULL"
    let str = "";

    let tracker = this.start;
    while (tracker !== undefined) {
      // Add this node to the string
      const strItem = display(tracker.item);
      str += `{ ${strItem} } -> `;
      tracker = tracker.next;
    }

    str += "NULL";

    return str;
  }

  append(value: T): void {}
  insertBefore(needle: T, value: T) {}
  insertAfter(needle: T, value: T) {}
}

// A node tracks one item and the next node
interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}
