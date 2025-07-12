const add = (arr) => {
  // initialising two emply variable using -Infinity value
  let firstLargestNum = -Infinity;
  let secondLargestNum = -Infinity;

  //
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargestNum) {
      secondLargestNum = firstLargestNum;
      firstLargestNum = arr[i];
    } else if (arr[i] > secondLargestNum) {
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
