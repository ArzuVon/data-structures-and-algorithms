export class Stack<T> {
  newArr: T[] = []; //new array to push item into

  get size(): number {
    return this.newArr.length; //checking the length of the array
    // throw new Error("Not implemented");
  }

  get peek(): T | undefined{
    if(this.isEmpty()){
      throw new Error("Stack is empty");
      } else {
      return this.newArr[this.size -1];
    }
  }  

  push(value: T): void {
    this.newArr.push(value);
  }

  pop(): T | undefined {
    if(this.isEmpty()) {
      throw new Error("Stack is empty");
    } else {
      throw this.newArr.shift(); 
    } 

  }
}
