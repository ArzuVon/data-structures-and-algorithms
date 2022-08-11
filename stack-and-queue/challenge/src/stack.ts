export class Stack<T> {
  newArr: T[] = []; //new array to push item into

  get size(): number {
    return this.newArr.length; //checking the length of the array
    // throw new Error("Not implemented");
  }

  get peek(): T {
    this.newArr[this.size -1];
    throw new Error("Not implemented");

  }

  push(value: T): void {
    this.newArr.push(value);
  }

  pop(): T | undefined {
    return this.newArr.push(value);
    Throw new Error("Not implemented");

  }
}
