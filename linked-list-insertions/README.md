# linked-list-insertions

```
Extend a Linked List to allow various insertion methods. Extending an Implementation
```

## Whiteboard Process

![InVision Whiteboard]()

## Approach & Efficiency

[linked-list-insertions]()

![Unit Test]()
>

## Solution


Remote code I did on friend computer at coffee shop

```
npm init -y
npm i --save jest
change test package to:
"test": "jest --coverage"
```

##LinkedList.js

class LinkedList {
    constructor() {
        this.head = null //references next element
        this.length = 0 //always acess length instead of searching through

    }
    insertAtHead(data) {
        const newNode = new LinkedListNode(data, this.head) //gave it the data we want to store and the next value will be current start
        this.head = newNode //new reference to beginning of list
        this.length++
    }
}

class LinkedListNode{
    constructor(value, next) {
        this.valur = value
        this.next = next
    }
}

module.exports = LinkedList


##app.js

const LinkedList = require('./LinkedList')


const ll = new LinkedList()
ll.insertAtHead(10)
ll.insertAtHead(20)

console.log(ll)


##LinkedList.test.js

const LinkedList = require('./LinkedList')


//describe what we are testing and # is for specific method
describe('#insertAtHead', () => {
    test('it adds the element to the beginning of the list', () => { //function of what we want to pass to test info of waht we want
        const ll = new LinkedList()
        ll.insertAtHead(10)
        const oldHead = ll.head //references/points at old head
        ll.insertAtHead(20)

        expect(ll.head.value).toBe(20)
        expect(ll.head.next).toBe(oldHead)
        expect(ll.length).toBe(2)
    })
})
