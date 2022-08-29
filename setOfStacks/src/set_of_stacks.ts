export class Stack<T> {
  arr: T[] = []; // no variable prefix in stack

  // The get syntax binds an object property to a function that will be called when that property is looked up
  // using arrays

  
  get size(): number {
    return this.arr.length;
  }
 
  get peek(): T | undefined {
    if (this.arr[this.arr.length - 1]) {
      return this.arr[this.arr.length - 1];
    } else {
      throw new Error;
    }
  }

  push(pushed: T): void {
    this.arr.push(pushed);
  }

  pop(): T | undefined {
    if (this.arr.length) {
      return this.arr.pop();
    } else {
      throw new Error;
    }
  }
}