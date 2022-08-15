export class Node<T> {
    data: T;
    next?: Node<T> | undefined;
  
    constructor(data: T) {
      this.data = data;
    }
  }