// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

const findMax = function (array){
  arrCopy = array.slice();

  if (arrCopy.length === 1) {
    return arrCopy[0];
  }
  if (arrCopy[0] < arrCopy[1]) {
    arrCopy.splice(0,1);
  } else {
      arrCopy.splice(1,1);
    }
    return findMax(arrCopy);
  }
findMax([4,6,7,20]);

const factorial = function (num){
  if(num <= 1) {
    return 1;
  } else {
    return num * factorial(num-1)
  }
}
factorial(5);

// formula
// fib(n) = fib(n-1) + fib(n-2)

function fibonacci(num){
  if (num <= 2) {
    return 1
  } else {
    return fibonacci(num-1) + fibonacci(num -2);
  }
};
fibonacci(5);

// function coinFlips(){
//     // This function returns an array of all possible outcomes from flipping a coin N times.
//     // Input type: Integer
//     // For example, coinFlips(2) would return the following:
//     // ["HH", "HT", "TH", "TT"]
//     // H stands for Heads and T stands for tails
//     // Represent the two outcomes of each flip as "H" or "T"
// }
//
// function letterCombinations(){
//     // This function returns an array of all combinations of the given letters
//     // Input type: Array of single characters
//     // For example, letterCombinations(["a","b","c"]) would return the following:
//     // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
// }
//
module.exports = {
    findMax,
    factorial,
    fibonacci
    // coinFlips,
    // letterCombinations
}
