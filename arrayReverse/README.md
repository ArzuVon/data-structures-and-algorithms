# Whiteboard only challenge

## Reverse an Array

[array-reverse](https://von646327.invisionapp.com/freehand/Code-Challenge--Class-01-Dcpd5CQfh?dsid_h=fb08fe6aea6bd598ccdf8305820c3b3a1ed4feec246ede8f51f9d315ecc4badc&uid_h=34d82471b82ac680fb20ac4ae59af9b23e859ebbdd5b3f8f8b6c8d32b7680a43)

```
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.
```

```
function reverseArray(num){

 let reversed = [];

 for(let i = num.length -1; i >= 0; i--){

 reversed += num[i]

} return reversed

}

let num = [1,2,3,4]

console.log(reverseArray(num))
```

## Whiteboard Process

- Add image

## Approach & Efficiency

> I noticed I need to get better at simplifying and explaining a solution

**In laymans terms:**

- Start with empty  array
- go to the first num in the array
- subtract the num in the array
- check if there is next num to subtract
- if there is a next num, subtract the next num
- Otherwise return the array of num