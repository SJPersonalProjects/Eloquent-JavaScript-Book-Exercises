/**
 * 
 * Write a loop that makes seven calls to console.log to output the following triangle:
 * 
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 * 
 * It may be useful to know that you can find the length of a string by writing .length after it.
 * 
 * let abc = "abc";
 * console.log(abc.length);
 * // → 3
 * 
 * 
 * Hint:
 * 
 * You can start with a program that prints out the numbers 1 to 7, which you can derive by making a few modifications 
 * the even number printing example given earlier in the chapter, where the for loop was introduced.
 * 
 * Now consider the equivalence between numbers and strings of hash characters. You can go from 1 to 2 by adding 1 (+= 1).
 * You can go from "#" to "##" by adding a character (+= "#"). Thus, your solution can closely follow the number-printing
 * program.
 */

let hash = "#";

for(let i = 0; i < 7; i++) {
    console.log(hash);
    hash += "#";
}

console.log("____________________________________");

/**
 * 
 * Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers
 * divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
 * 
 * When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and
 * still print "Fizz" or "Buzz" for numbers divisible by only one of those).
 * 
 * (This is actually an interview question that has been claimed to weed out a significant percentage of programmer
 * candidates. So if you solved it, your labor market value just went up.)
 */

// for(let i = 1; i <= 100; i++) {
//     if((i % 3 === 0) && (i % 5 === 0)) console.log("Fizz Buzz");
//     else if(i % 3 === 0) console.log("Fizz");
//     else if(i % 5 === 0) console.log("Buzz");
// }

/**
 * 
 * Chessboard
 * 
 * Write a program that creates a string that represents an 8×8 grid, using
 * newline characters to separate lines. At each position of the grid there
 * is either a space or a "#" character. The characters should form 
 * chessboard.
 * 
 * Passing this string to console.log should show something like this:
 * 
 *  # # # #
 * # # # # 
 *  # # # #
 * # # # # 
 *  # # # #
 * # # # # 
 *  # # # #
 * # # # #
 */

console.log(0 % 2 === 0);
console.log(1 % 2 === 0);


const GRID_SIZE = 8;
let counter = 1;
const BLACK = "⚫";
const WHITE = "🔘";

for (let i = 0; i < GRID_SIZE; i++) {
    let result = '';

    for (let j = 0; j < GRID_SIZE; j++) {
        result += (i + j) % 2 === 0 ? BLACK : WHITE;
    }

    console.log(result);
}