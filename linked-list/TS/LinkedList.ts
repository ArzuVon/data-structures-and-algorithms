import { Collection, display } from './Collection';

//Three parts of variable
//let name: type = value

export class LinkedList<T> implements Collection<T> {
    start: Node<T>|undefined; //or head


    //TODO
    insert(item: T){
        const newNode ={
            item, item,
            next: this.start
        };
    this.start = newNode;
}

includes(item: T): boolean {
     //what is the first item?
    let tracker = this.start;
     //need to do some traversal 
    while (tracker !== undefined) {
    // check the second item
      if (tracker.item === item) {
        return true;
      }
      tracker = tracker.next;
    }
    //what is the last thing to do?
    return false;
  }

toString(): string {
    // For each item
    // get its string using display(item)
    // put it inside { }
    // Put an arrow between all items
    // End the entire list with a "Null"
    let str = "";

    let tracker = this.start;
    while (tracker !== undefined) {
        //ToDo
        //add this node to the string
        while (tracker !== undefined) {
            const displayString = display(tracker.item);
            str += `{ ${tracker.item} } -> `;
            tracker = tracker.next;
          }
          str += "NULL";
          return str;
        }
      }



//Davids example below helped simplify above
//         const strItem = display(tracker.item);
//         str += `{ ${strItem} } => `;
//         tracker = tracker.next;
//     }
//     str =+ Null
//     return str;
// }



//A node tracks one item and the next

interface Node<T>{
    item: T;
    next: Node<T> | undefined;
}