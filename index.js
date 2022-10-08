// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   let arraySum =[]
//   for (let i of array) {          //n steps
//     for (let k of array) {        // n steps , n*n
//       arraySum.push(i + k)        // 1step
//       //console.log (arraySum)
//     }
//   }
//     if (arraySum.includes(target) ){  //1 step
//       return true
//      } else {
//        return false
//      }
  // }

  function hasTargetSum(array, target) {
    for (let i = 0; i < array.length; i++) {
      const complement = target - array[i];
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] === complement) return true;
      }
    }
    return false;
  }
  
/* 
  Write the Big O time complexity of your function here
   (n^2) for iterations and 2 other steps
   Big O(1)

*/

/* 
input: hasTargetSum([22, 16, 4, 6, 30], 38)
output: true (22,16)

input: hasTargetSum([6, 19, 13, 7, 30], 18)
output: false



  Add your pseudocode here
  function something (array, targetNum){
    iterate through the array as i (for of){ 
      iterate through tthe array as k (for of)
      console.log i + k
      if (num.array + num.array === targetNum ){
        return true
      } else {
        return false
      }
    }
}


*/
/*
  Add written explanation of your solution here
      function with 2 arguments array & target number
        if the sum of 2 numbers in the array equal the target number
        return true
        otherwise return false 


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22,28, 72, 4, 36, 30], 76));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2,48, 35, 5], 56));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([32, 43, 4, 6, 30], 75));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([7, 28, 33, 64, 9], 4));
}

module.exports = hasTargetSum;
