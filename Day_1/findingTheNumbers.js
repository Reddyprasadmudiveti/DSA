// find the largest number in an array

const findLargest = (arr) => {
  let largestNum = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
};

const arr = [20, 30, 60, 78, 48, 90];

console.log(findLargest(arr))

//90



//Alternative and Builtin function for find max value in an array
let largest = Math.max(...arr);

console.log(largest)

//90