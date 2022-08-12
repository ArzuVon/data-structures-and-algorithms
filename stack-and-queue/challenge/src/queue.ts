export class Queue<T> {

newArr: T[] = [];

get size(): number {
  return this.newArr.length;  
}

get peek(): T {
  if(this.isEmpty()){
    throw new Error("Queue is empty");
    } else {
    return this.newArr[this.newArr.length -1];
  }
}  

  enqueue(value: T): void {
    this.newArr.unshift(value);  
}

dequeue(): T | undefined {
  if(this.isEmpty()) {
    throw new Error( "Oueue is empty");
  } else {
  return this.newArr.shift();
  }
}

isEmpty(): boolean {
  if(this.newArr.length === 0){
  return true;
  } else {
  return false;

    }
  }
}
