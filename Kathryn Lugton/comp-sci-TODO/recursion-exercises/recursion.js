// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(){
    // This function returns the largest number in a given array.
}

function factorial(){
    // This function returns the factorial of a given number.
}

//formula
//fib(n) = fib(n-1) + fib(n-2)

function fibonacci(n){

}


 def fibonacci_recursive(n) {
 if(n <= 2){
 return 1
} else {
 fibonacci_recursive(n-2)
}
}
fibonacci_recursive(3)

function coinFlips(){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
