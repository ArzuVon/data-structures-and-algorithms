// Start with a class
export class Person {
  // Two properties
  // name;
  // age;

  // Give them types!
  name: string;
  age: number;

  constructor(name: string, age: number) {
    // Assign them up front
    this.name = name;
    this.age = age;
  }
}

const david = new Person("David", 35);

export class SetOfStacks<T> {
  private stacks: Stack<T>[] = [];

  // Must use the below Stack class internally.
  // When you need to create a new stack, do so with:
  //
  //    let stack = new Stack<T>(this.maxHeight);
  //
  constructor(readonly maxHeight: number) {}

  push(t: T): void {
    if (this.stacks.length === 0) {
      this.stacks.push(new Stack<T>(this.maxHeight));
    }
    let top = this.stacks.at(-1)!;
    if (top.size === this.maxHeight) {
      top = new Stack<T>(this.maxHeight);
      this.stacks.push(top);
    }
    top.push(t);
  }

  pop(): T | undefined {
    let top = this.stacks.at(-1);
    if (top) {
      let t = top.pop();
      if (top.size === 0) {
        this.stacks.pop();
      }
      return t;
    }
    return undefined;
  }

  get peek(): T | undefined {
    let top = this.stacks.at(-1);
    if (top) {
      return top.peek;
    }
    return undefined;
  }

  // BONUS QUESTION
  get size(): number {
    return this.stacks.reduce((c, s) => c + s.size, 0);
  }
}

class Stack<T> {
  readonly _arr: T[] = [];

  constructor(private readonly maxHeight: number) {}

  push(t: T) {
    if (this._arr.length > this.maxHeight) {
      throw new Error("Stack toppled over!");
    }
    this._arr.push(t);
  }

  pop() {
    return this._arr.pop();
  }

  get peek(): T | undefined {
    return this._arr.at(-1);
  }

  get size(): number {
    return this._arr.length;
  }
}
