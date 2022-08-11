export class Queue<T> {

storage: [] = [];
get size(): number {
  return this.storage.length;  
}

get peek(): T {
  if(this.isEmpty()){
    throw new Error("Queue is empty");
    }else{
    return this.storage[this.storage.length -1];
  }
}  }

  enqueue(value: T): void {
    this.storage.unshift(value);  
}

  dequeue(): T {
    throw new Error("Not implemented");
  }
}
