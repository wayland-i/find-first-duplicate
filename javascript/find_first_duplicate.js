function findFirstDuplicate(arr) {
  if (arr.length > 1) {
    let x = 0
    let y = arr.length - 1
    let z = []
    while (x <= y) {
      arr
      x++
    }
    return z
  } else {
    return -1
  }
}

// function findFirstDuplicate(arr) {
//   if (arr.length === 0, 1) {
//     return (-1)
//   }
// }

// function findFirstDuplicate(arr) {
//   if (condition) {

//   } else (condition){
//     return -1
//   }
// }



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution


//Ian's PSEUDOCODE

//a random array is given as an arguement to a function, the function returns either one of two values:
//EITHER the first duplicated number is returned
//OR their are no duplicates return -1