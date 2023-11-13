// /**
//  Q1
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
// */

function createHelloWorld() {
  return function printHello() {
    let name = "Hello World";
    return name;
  };
}
console.log(createHelloWorld()());

// ---------------------------------------------------------//

/**Given an integer n, return a counter function. This counter function
 *  initially returns n and then returns 1 more than the previous value
 * every subsequent time it is called (n, n + 1, n + 2, etc). */

let createCounter = function (n) {
  let count;
  return function () {
    if (count === undefined) {
      count = n;
    } else {
      count = count + 1;
    }
    return count;
  };
};
let counter = createCounter(10);
console.log(counter());

// &

// var createCounter = function(n) {
//   let count = n-1
// return function() {
//   count=count+1
//   return count;
// };
// };

// ---------------------------------------------------------//

let x = 0;
let y = 10;
// for (i = x; i <= y; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// function counts() {
//   let x = 0;
//   let y = 2;
//   for (i = x; i <= y; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
//   return length.i;
// }
// console.log(counts());

function evenAndOdd(start, end) {
  for (i = start; i <= end; i++)
    if (i % 2 == 0) {
      console.log(`${i} number is even`);
    }
}
console.log(evenAndOdd(1, 10));

function triArea(base, height) {
  return (base * height) / 2;
}
console.log(triArea(3, 2));

function calculator(str) {
  return eval(str);
}
console.log(calculator("13 + 2 "));

function getFirstValue(arr) {
  let FirstValue = arr[0];
  return FirstValue;
}
console.log(getFirstValue([1, 2, 3]));

function lessThan100(a, b) {
  return a + b <= 100;
}
console.log(lessThan100(20, 10));

// ---------------------------------------------------------//

// Date:- 28/09/23

/** Q1 Is the Number Less than or Equal to Zero?
  Create a function that takes a number as its only argument and returns true 
 if it's less than or equal to zero, otherwise return false.
 Examples

lessThanOrEqualToZero(5) ➞ false

lessThanOrEqualToZero(0) ➞ true

lessThanOrEqualToZero(-2) ➞ true
 */

function lessThanOrEqualToZero(num) {
  return num <= 0;
}
console.log(lessThanOrEqualToZero(10));

/** Q2 Maximum Edge of a Triangle

Create a function that finds the maximum range of a triangle's 
third edge, where the side lengths are all integers.

Examples

nextEdge(8, 10) ➞ 17

nextEdge(5, 7) ➞ 11

nextEdge(9, 2) ➞ 10

Notes

    (side1 + side2) - 1 = maximum range of third edge.
    The side lengths of the triangle are positive integers.
    Don't forget to return the result. */

function nextEdge(side1, side2) {
  return side1 + side2 - 1;
}
console.log("Q 01", nextEdge(10, 10));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q2 Find the Perimeter of a Rectangle

Create a function that takes length and width and finds the perimeter of a rectangle.
Examples

findPerimeter(6, 7) ➞ 26

findPerimeter(20, 10) ➞ 60

findPerimeter(2, 9) ➞ 22

Notes

    Don't forget to return the result.
    If you're stuck, find help in the Resources tab.
    If you're really stuck, find solutions in the Solutions tab. */

function findThePerimeter(length, width) {
  let cal = (length + width) * 2;
  return cal;
}
console.log("Q 02", findThePerimeter(2, 9));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q3 Less Than 100?

Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
Examples

lessThan100(22, 15) ➞ true
// 22 + 15 = 37

lessThan100(83, 34) ➞ false
// 83 + 34 = 117

lessThan100(3, 77) ➞ true*/

function lessThan100(a, b) {
  let total = a + b;
  let cal = total <= 100;
  return cal;
}
console.log("Q 03", lessThan100(10, 100));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q4 Sum of Polygon Angles

Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
Examples

sumPolygon(3) ➞ 180

sumPolygon(4) ➞ 360

sumPolygon(6) ➞ 720

Notes

    n will always be greater than 2.
    The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.
 */
function SumPolygon(n) {
  let sum = (n - 2) * 180;
  return sum;
}
console.log("Q 04", SumPolygon(3));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q5 Basketball Points

You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored,
 find the final points for the team and return that value.
Examples

points(1, 1) ➞ 5

points(7, 5) ➞ 29

points(38, 8) ➞ 100 */

function points(twoPointer, threePointer) {
  let pointCal = twoPointer * 2 + threePointer * 3;
  return pointCal;
}
console.log("Q 05", points(38, 8));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q6 Buggy Code (Part 5)

Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge.
 Look at the examples below to get an idea of what the function should do.
Examples

printArray(1) ➞ [1]

printArray(3) ➞ [1, 2, 3]

printArray(6) ➞ [1, 2, 3, 4, 5, 6]

Notes

    READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
    Don't overthink this challenge; it's not supposed to be hard. */

function printArray(number) {
  let newArray = [];

  for (var i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}
console.log("Q 06", printArray(6));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q7Basic Variable Assignment

A student learning JavaScript was trying to make a function. His code should concatenate a passed
string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.
Examples

nameString("Mubashir") ➞ "MubashirEdabit"

nameString("Matt") ➞ "MattEdabit"

nameString("javaScript") ➞ "javaScriptEdabit"  

Notes

    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab. */

function nameString(name) {
  return name + "Edabit";
}
console.log("Q 07", nameString("Matt"));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q8 Buggy Code (Part 7)

Mubashir wants to swap two given numbers!

It is not returning the right values. Can you help him fix it?

a = 100
b = 200
a, b = swap(a, b)
print(a, b) // Should print out "200, 100", but the function prints out "100, 100"

Examples

swap(100, 200) ➞ [200, 100]

swap(44, 33) ➞ [33, 44]

swap(21, 12) ➞ [12, 21] */

function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}
console.log("Q 08", swap(100, 200));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q9 The Farm Problem

In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. 
The farmer breeds three species:

    chickens = 2 legs
    cows = 4 legs
    pigs = 4 legs

The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a 
function that returns the total number of legs of all the animals.

Examples

animals(2, 3, 5) ➞ 36

animals(1, 2, 3) ➞ 22

animals(5, 2, 8) ➞ 50

Notes

    Don't forget to return the result.
    The order of animals passed is animals(chickens, cows, pigs).
    Remember that the farmer wants to know the total number of legs and not the total number of animals. */

function animals(chickens, cows, pigs) {
  let animal = chickens * 2 + cows * 4 + pigs * 4;
  return animal;
}
console.log("Q 09", animals(1, 2, 3));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q 10 Using the "&&" Operator

JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

Consider a && b:

    a is checked if it is true or false.
    If a is false, false is returned.
    b is checked if it is true or false.
    If b is false, false is returned.
    Otherwise, true is returned (as both a and b are therefore true ).

The && operator will only return true for true && true.

Make a function using the && operator.
Examples

and(true, false) ➞ false

and(true, true) ➞ true

and(false, true) ➞ false

and(false, false) ➞ false
*/

function and(a, b) {
  if (a == true && b == true) {
    return true;
  } else {
    return false;
  }
}
console.log("Q 10", and(true, true));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q 11
  Are the Numbers Equal?

Create a function that returns true when num1 is equal to num2; otherwise return false.
Examples

isSameNum(4, 8) ➞ false

isSameNum(2, 2) ➞  true

isSameNum(2, "2") ➞ false

Notes

Don't forget to return the result.
 */

function isSameNum(num1, num2) {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}
console.log("Q 11", isSameNum(1, 1));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q 12 Convert Hours and Minutes into Seconds

Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
Examples

convert(1, 3) ➞ 3780

convert(2, 0) ➞ 7200

convert(0, 0) ➞ 0

Notes

    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab. */

function convert(hours, minute) {
  let hoursCal = hours * 60 * 60;
  let minuteCal = minute * 60;
  let cal = hoursCal + minuteCal;
  return cal;
}
console.log("Q 12", convert(1, 12));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q 13 Fix the Expression

Fix the code in the Code tab so the function returns true if and only if x is equal to 7.
Examples

isSeven(4) ➞ false

isSeven(9) ➞ false

isSeven(7) ➞ true

Notes

The bug can be hard to find, so look closely! */

function isSeven(x) {
  return x == "7" ? true : false;
}
console.log("Q 13", isSeven(7));

// -----------------------------------------------------------------------------------------------------------------------//

// Date:- 29/08/23

/** Q 14 Equality Check

In this challenge, you must verify the equality of two different values given the parameters a and b.

Both the value and type of the parameters need to be equal. The possible types of the given parameters are:

    Numbers
    Strings
    Booleans (false or true)
    Special values: undefined, null and NaN

What have you learned so far that will permit you to do two different checks (value and type) with a single statement?

Implement a function that returns true if the parameters are equal, and false if they are not.
Examples

checkEquality(1, true) ➞ false
// A number and a boolean: the value and type are different.

checkEquality(0, "0") ➞ false
// A number and a string: the type is different.

checkEquality(1,  1) ➞ true
// A number and a number: the type and value are equal.

Notes

    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab. */

function checkEquality(num1, num2) {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}
console.log("Q 14", checkEquality(1, 1));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q 15 Profitable Gamble

Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

To illustrate:

profitableGamble(0.2, 50, 9)

... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
Examples

profitableGamble(0.2, 50, 9) ➞ true

profitableGamble(0.9, 1, 2) ➞ false

profitableGamble(0.9, 3, 2) ➞ true

Notes

A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following 
manner: net_outcome = probability_of_winning * prize - cost_of_playing. */

function profitableGamble(prob, prize, pay) {
  if (prob * prize > pay) {
    return true;
  } else {
    return false;
  }
}
console.log("Q 15", profitableGamble(0.9, 3, 2));
// -----------------------------------------------------------------------------------------------------------------------//

/** Q 16 Boolean to String Conversion

Create a function that takes a boolean variable flag and returns it as a string.
Examples

boolToString(true) ➞ "true"

boolToString(false) ➞ "false"

Notes

    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.*/

function boolToString(flag) {
  if (flag === true) {
    return "true";
  } else {
    return "false";
  }
}
console.log("Q 16", boolToString(true));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q 17 Using Arrow Functions

Create a function that returns the given argument, but by using an arrow function.

An arrow function is constructed like so:

arrowFunc=(/*parameters/)=> //code here

Examples

arrowFunc(3) ➞ 3

arrowFunc("3") ➞ "3"

arrowFunc(true) ➞ true

Notes

Check the Resources tab for more information on arrow functions. */

let arrowFunc = (a) => {
  return a;
};
console.log("Q 17", arrowFunc("true"));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q 18 Frames Per Second

Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
Examples

frames(1, 1) ➞ 60

frames(10, 1) ➞ 600

frames(10, 25) ➞ 15000

Notes

FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.*/

let frames = (minutes, fps) => {
  return minutes * fps * 60;
};
console.log("Q 18", frames(10, 25));
// -----------------------------------------------------------------------------------------------------------------------//

/** Q 19 Buggy Code (Part 4)

Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like
to greet him slightly differently. She added a special case in her function, but she made a mistake.

Can you help her?
Examples

greeting("Matt") ➞ "Hello, Matt!"

greeting("Helen") ➞ "Hello, Helen!"

greeting("Mubashir") ➞ "Hello, my Love!"

Notes

    READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
    Don't overthink this challenge; it's not supposed to be hard.*/

function greeting(name) {
  if (name === "Mubashir") {
    return "Hello, my Love!";
  } else {
    return "Hello, " + name + "!";
  }
}
console.log("Q 19", greeting("Mubashir"));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q 20 Two Makes Ten

Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
Examples

makesTen(9, 10) ➞ true

makesTen(9, 9) ➞ false

makesTen(1, 9) ➞ true

Notes

Don't forget to return the result. */

function makesTen(a, b) {
  if (a + b === 10 || a === 10 || b === 10) {
    return true;
  } else {
    return false;
  }
}
console.log("Q 20", makesTen(9, 10));

// -----------------------------------------------------------------------------------------------------------------------//
/** Q 21 Let's Fuel Up!

A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

Create a function which calculates the amount of fuel it needs, given the distance.
Examples

calculateFuel(15) ➞ 150

calculateFuel(23.5) ➞ 235

calculateFuel(3) ➞ 100

Notes

    Distance will be a number greater than zero.
    Return 100 if the calculated fuel turns out to be less than 100.*/

function calculateFuel(n) {
  let fuleCal = n * 10;
  if (fuleCal <= 100) {
    return 100;
  } else {
    return fuleCal;
  }
}
console.log("Q 21", calculateFuel(1));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q 22 Pair Management

Given two arguments, return an array which contains these two arguments.
Examples

makePair(1, 2) ➞ [1, 2]

makePair(51, 21) ➞ [51, 21]

makePair(512124, 215) ➞ [512124, 215]

Notes

N/A*/

function makePair(num1, num2) {
  let newArray = [];
  newArray.push(num1, num2);
  return newArray;
}
console.log("Q 22", makePair(51, 215));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q 23 Compare Strings by Count of Characters

Create a function that takes two strings as arguments and return either true or false depending on whether the total 
number of characters in the first string is equal to the total number of characters in the second string.
Examples

comp("AB", "CD") ➞ true

comp("ABC", "DE") ➞ false

comp("hello", "edabit") ➞ false

Notes

    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.*/

function comp(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}
console.log("Q 23", comp("abd", "abd"));
// -----------------------------------------------------------------------------------------------------------------------//

/** Q 24 Is the String Empty?

Create a function that returns true if a string is empty and false otherwise.
Examples

isEmpty("") ➞ true

isEmpty(" ") ➞ false

isEmpty("a") ➞ false

Notes

    A string containing only whitespaces " " does not count as empty.
    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.*/

function isEmpty(s) {
  if (s.length == 0) {
    return true;
  } else {
    return false;
  }
}
console.log("Q 24", isEmpty("a"));
// -----------------------------------------------------------------------------------------------------------------------//

/** Q 25 Check if an Integer is Divisible By Five

Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
Examples

divisibleByFive(5) ➞ true

divisibleByFive(-55) ➞ true

divisibleByFive(37) ➞ false

Notes

    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab. */

function divisibleByFive(num) {
  if (num % 5 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log("Q 25", divisibleByFive(20));
// -----------------------------------------------------------------------------------------------------------------------//

/** Q 26 Multiple of 100

Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
Examples

divisible(1) ➞ false

divisible(1000) ➞ true

divisible(100) ➞ true

Notes

    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.*/

function divisible(num) {
  return num >= 100 ? true : false;
}
console.log("Q 26", divisible(1));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q 27 Divides Evenly

Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
Examples

dividesEvenly(98, 7) ➞ true
// 98/7 = 14

dividesEvenly(85, 4) ➞ false
// 85/4 = 21.25

Notes

a will always be greater than or equal to b.*/

function dividesEvenly(num1, num2) {
  let cal = num1 % num2;
  return cal % 2 == 0 ? true : false;
}
console.log("Q 27", dividesEvenly(98, 7));
// -----------------------------------------------------------------------------------------------------------------------//

/** Q 28 Area of a Rectangle

Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.
Examples

area(3, 4) ➞ 12

area(10, 11) ➞ 110

area(-1, 5) ➞ -1

area(0, 2) ➞ -1

Notes

N/A*/

function area(value1, value2) {
  let calValue = value1 * value2;
  if (value1 <= 0 || value2 <= 0) {
    return -1;
  } else {
    return calValue;
  }
}
console.log("Q 28", area(2, 1));
// -----------------------------------------------------------------------------------------------------------------------//

/** Q 29 Evaluate an Equation

Create a function that evaluates an equation.
Examples

eq("1+2") ➞ 3

eq("6/(9-7)") ➞ 3

eq("3+2-4") ➞ 1

Notes

    Don't print, return a value.
    Return the value, not the equation.
    The method used to solve this challenge should not be used in practice. However, it's important to be aware of how this 
    functionality works and why it should not be used. Check the Resources for more information.*/

function eq(equation) {
  return eval(equation);
}
console.log("Q 29", eq("3+2-4"));
// -----------------------------------------------------------------------------------------------------------------------//
/** Q 29 Solve the Equation

Create a function that takes an equation (e.g. "1+1"), and returns the answer.
Examples

equation("1+1") ➞ 2

equation("7*4-2") ➞ 26

equation("1+1+1+1+1") ➞ 5

Notes

Supported operators are +, -, and *.

*/
function equation(num) {
  return eval(num);
}
console.log("Q 29", equation("1+1+1"));

// -----------------------------------------------------------------------------------------------------------------------//
/** Q 30 Radians to Degrees

Create a function that takes an angle in radians and returns the corresponding angle in degrees.
Examples

radiansToDegrees(1) ➞ 57.29577951308232

radiansToDegrees(20) ➞ 1145.9155902616465

radiansToDegrees(50) ➞ 2864.7889756541163

Notes

N/A*/

function radiansToDegrees(rad) {
  return (rad * 180) / 3.141592653589793;
}
console.log("Q 30", radiansToDegrees(20));

// and

function radiansToDegrees(rad) {
  return (rad * 180) / Math.PI;
}
console.log(radiansToDegrees(20));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q 31 Century Crisis

Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.

You must calculate the number of people there will be in three decades from now.

    The variable population is the world population now.
    Assume that every month, someone gives birth to more people n.

Return the number of people there will be when the spaceship is complete.
Examples

futurePeople(256, 2) ➞ 976

futurePeople(3248, 6) ➞ 5408

futurePeople(5240, 3) ➞ 6320

Notes
decades=10yr
months * 10 yr * decades= total months.
12*10*3=360
Humanity's fate lies in your calculation.
*/

function futurePeople(population, n) {
  return population + n * 360;
}
console.log("Q 31", futurePeople(5240, 3));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q 32 Inches to Feet

Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.
Examples

inchesToFeet(324) ➞ 27

inchesToFeet(12) ➞ 1

inchesToFeet(36) ➞ 3

Notes

    If inches are under 12, return 0.
    12 inches = 1 foot.
    */

function inchesToFeet(inches) {
  return inches < 12 ? 0 : inches / 12;
}
console.log("Q 32", inchesToFeet(12));
// -----------------------------------------------------------------------------------------------------------------------//

/** Q 33 I'd Like a New Shade of Blue, Please

I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. 
Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.

    n is the number of square meters I can paint.
    w and h are the widths and heights of a single wall in meters.

Examples

howManyWalls(100, 4, 5) ➞ 5

howManyWalls(10, 15, 12) ➞ 0

howManyWalls(41, 3, 6) ➞ 2

Notes

    Don't count a wall if I don't manage to finish painting all of it before I run out of paint.
    All walls will have the same dimensions.
    All numbers will be positive integers.
    */

function howManyWalls(n, h, w) {
  let cal = n / (h * w);
  return Math.floor(cal);
}
console.log("Q 33", howManyWalls(41, 3, 6));
// -----------------------------------------------------------------------------------------------------------------------//

/** Q 34  To the Power of _____

Create a function that takes a base number and an exponent number and returns the calculation.
Examples

calculateExponent(5, 5) ➞ 3125

calculateExponent(10, 10) ➞ 10000000000

calculateExponent(3, 3) ➞ 27

Notes

    All test inputs will be positive integers
    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.
    */

function calculateExponent(num, exp) {
  return Math.pow(num, exp);
}
console.log("Q 34", calculateExponent(5, 5));
// -----------------------------------------------------------------------------------------------------------------------//
/** Q 35 Recursion: Length of a String

Write a function that returns the length of a string. Make your function recursive.
Examples

length("apple") ➞ 5

length("make") ➞ 4

length("a") ➞ 1

length("") ➞ 0

Notes

Check the Resources tab for info on recursion.*/

function length(str) {
  return str.length;
}
console.log("Q 35", length("make"));

// -----------------------------------------------------------------------------------------------------------------------//
/** Q 36 Add up the Numbers from a Single Number

Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
Examples

addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300

Notes

Expect any positive number between 1 and 1000.*/

function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = i + sum;
  }
  return sum;
}
console.log("Q 36", addUp(4));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q 37 Matchstick Houses

This challenge will help you interpret mathematical relationships both algebraically and geometrically.

Matchstick Houses, Steps 1, 2 and 3

Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
Examples

matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436

Notes

    Step 0 returns 0 matchsticks.
    The input (step) will always be a non-negative integer.
    Think of the input (step) as the total number of houses that have been connected together.
     */
function matchHouses(num) {
  if (num <= 0) {
    return 0;
  } else {
    return num * 5 + 1;
  }
}
console.log("Q 37", matchHouses(0));

// -----------------------------------------------------------------------------------------------------------------------//

/** Q 38 Find the Index

Create a function that takes an array and a string as arguments and returns the index of the string.
Examples

findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

findIndex(["a", "g", "y", "d"], "d") ➞ 3

findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

Notes

    Don't forget to return the result.
    If you are stuck, find help in the Resources tab.*/

// function findIndex(arr, str) {
//   let newArray = [];
//   newArray.push(arr);
//   return findIndex(newArray.include(arr));
// }
// console.log(findIndex("hi", "edabit", "fgh", "abc", "fgh"));
// ---------------------------------------------------------//
