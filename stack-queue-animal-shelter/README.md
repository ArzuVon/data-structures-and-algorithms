 # Stack-Queue-Animal-Shelter

 >Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.

## Approach & Efficiency

- Write code that will enqueue and dequeue animals

![Screen Shot 2022-09-19 at 5 48 44 AM](https://user-images.githubusercontent.com/107226923/190992077-59a00cdd-d779-429e-ad19-78d7b0ee2548.png)

## Solution

### Main parts of solution

```
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
```