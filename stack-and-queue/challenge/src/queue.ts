export class Queue<T> {

newArr: [] = [];
get size(): number {
  return this.newArr.length;  
}

get peek(): T {
  if(this.isEmpty()){
    throw new Error("Queue is empty");
    }else{
    return this.newArr[this.newArr.length -1];
  }
}  }

  enqueue(value: T): void {
    this.newArr.unshift(value);  
}

  dequeue(): T {
    throw new Error("Not implemented");
  }
}
