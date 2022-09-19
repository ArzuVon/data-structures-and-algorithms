interface Animal {
  name: string;
  type: "cat" | "dog";
}
//could use shift, removes the first element in an array and returns that removed element.
// enqueue() — Adds an element to the queue
// dequeue() — Removes and returns the first item entered in the queue
//isEmpty() — Returns true or false based on if the queue is empty or not
//need to specify what is going into a variable.
// : <--- this will specify what kind of data it is
export class Shelter {
  animalArr: Animal[] = [];
  // method signature
  //'void' means that function isnt returning anything.
  enqueue(name: string, type: "cat" | "dog"): void {
    const newAnimal: Animal = {
      name: name,
      type: type,
    };
    this.animalArr.push(newAnimal);
  }

  //isEmpty() — Returns true or false based on if the queue is empty or not
  //could use shift, removes the first element in an array and returns that removed element.

  dequeue(type?: "cat" | "dog"): any {
    // this is checking if queue is empty
    if (this.animalArr.length === 0) {
      throw Error("Queue is empty..");
    } else {
      if (this.animalArr.length) {
        for (let i = 0; i < this.animalArr.length; i++) {
          // If the type is given, return the next animal of a type.
          if (this.animalArr[i].type === type) {
            return this.animalArr.splice(i, 1)[0].name;
          }
          // array.splice(index, howmany, item1, ....., itemX) - w3schools
        }
      }
      // If no type is given (type === undefined), return the next animal.
      if (type === undefined) {
        return this.animalArr.shift()?.name;
        //The shift() method removes the first element from an array and returns that removed element. - mdn
      }
    }
  }
}
