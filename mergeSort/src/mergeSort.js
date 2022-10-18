let inputArray = [6, 10, 2, 15, 12, 7, 4];
function mergeSort(arr) {
  let len = arr.length;
  if (len === 0) {
    throw new Error("Empty input array!");
  }
  if (len > 1) {
    let mid = len / 2;
    console.log("mid: ", mid);
    let left = arr.slice(0, mid);
    console.log("leftArr: ", left);
    let right = arr.slice(mid, len);
    console.log("rightArr: ", right);
    console.log("\n");
    mergeSort(left);
    console.log("left: ", left);
    mergeSort(right);
    console.log("right: ", right);
    return merge(left, right, arr);
  }
  return arr;
}
function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;
  console.log("left: ", left);
  console.log("right: ", right);
  console.log("arr: ", arr);
  console.log("\n");

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      console.log("left[i]: ", left[i], "<=", " right[j]: ", right[j]);
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  if (i === left.length) {
    console.log("i === left.lenght is running");
    while (j < right.length) {
      arr[k] = right[j];
      k++;
      j++;
    }
  } else {
    while (i < left.length) {
      console.log("while i < left.length is running");
      arr[k] = left[i];
      k++;
      i++;
    }
  }
  console.log(arr);
  return arr;
}
mergeSort(inputArray);
