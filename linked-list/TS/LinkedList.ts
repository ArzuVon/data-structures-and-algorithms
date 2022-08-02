import { Collection } from './Collection';
import { LinkedList } from './LinkedList';

//Three parts of variable
//let name: type = value

export class LinkedList<T>implements Collection<T>{
    start: Node<T>|undefined; //or head


    //TODO
    insert(item: T){
       this.start= {
            item: item,
            next: this.start,
    };
    //this.start = newNode;
}

    includes(item: T): boolean {
        //what is the first item?
        //this.start
        let tracker = this.start;
        //need to do some traversal...how 
        if(tracker?.item === item){
            return true;
        } else {
            // check the second item
            if(tracker?.next?.item === item){
                return true;
            }
        }

        //what is the last thing to do?
        return true;
    }
// below is traversal
    while (tracker !=== undefined /* there is a value */) {
        //do this thing
        if (tracker. item === item){
            return true;
        }
        //move foward
        tracker = tracker.next;
    }

    //whats the last thing to do?
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
    while (tracker !=== undefined) {
        //ToDo
        //add this node to the string
        const strItem = display(tracker.item);
        str += `{ ${strItem} } => `;
        tracker = tracker.next;
    }
    str =+ Null
    return str;
}



//A node tracks one item and the next

interface Node<T>{
    item: T;
    next: Node<T> | undefined;
}