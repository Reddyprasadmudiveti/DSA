const add = (arr) => {
  // initialising two emply variable using -Infinity value
  let firstLargestNum = -Infinity;
  let secondLargestNum = -Infinity;

  //intialized the loop
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargestNum) {
      // checking if array of i (i=0) is greater than firstLargestNum (firstLargestNum is -Infinity in this case)
      secondLargestNum = firstLargestNum; // if not then push the first largest value to second largest value
      firstLargestNum = arr[i]; // then increment the value of firstlargest value to arr[i]
    } else if (arr[i] > secondLargestNum) {
      // if not then add that to second largest value
      secondLargestNum = arr[i];
    }
  }
  return [firstLargestNum, secondLargestNum];
};

const arr = [1, 40, 50, 6, 80, 4];

const [firstLargestNum, secondLargestNum] = add(arr);

console.log("First Largest Number", firstLargestNum);
console.log("second Largest Number", secondLargestNum);

// it will return first largest and second largest number valuves

// first largest number value is 80
// second largest number value is 50
