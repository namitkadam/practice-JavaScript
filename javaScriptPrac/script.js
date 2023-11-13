/**
capitalize the first letter of srting
input : "practise code"
output : "Practise code"
*/

let myStr = "practise code";
console.log(myStr.charAt(0).toUpperCase() + myStr.slice(1));

// we can use only slice method
console.log(myStr.slice(0, 1).toUpperCase() + myStr.slice(1));

// ----------------------------------------------------------------------------//

/**
capitalize the first letter of each word in  srting
input : "practise code"
output : "Practise Code"
*/

const capitalizeFirstLetters = function (str) {
  let word = str.split(" ");
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
  }
  return word.join(" ");
};
let output = capitalizeFirstLetters(myStr);
console.log(output);

// we can do with for of loop

function capitalizeFirstLetter(str) {
  let word = str.split(" ");
  let newArr = [];
  for (const value of word) {
    let resutl = value.charAt(0).toUpperCase() + value.slice(1);
    newArr.push(resutl);
  }
  return newArr.join(" ");
}
let output1 = capitalizeFirstLetter(myStr);
console.log(output1);

// ----------------------------------------------------------------------------//

/**
Input a string and converts
upper case letters to lowerr and vice versa 
input : "AbCdE"
output : "aBcDe"
*/

function swapCase(str) {
  // use split method
  let letters = str.split("");
  //  creat new arr
  let newArr = [];
  for (let letter of letters) {
    if (letter === letter.toUpperCase()) {
      newArr.push(letter.toLowerCase());
    } else {
      newArr.push(letter.toUpperCase());
    }
  }
  return newArr.join("");
}
let swapLetter = swapCase("AbCdE");
console.log(swapLetter);

// we can use math method

function swapCase1(str) {
  let letters = str.split("");
  let newArr = [];
  for (const letter of letters) {
    if (letter.match("[A-Z]")) {
      newArr.push(letter.toLowerCase());
    } else {
      newArr.push(letter.toUpperCase());
    }
  }
  return newArr.join("");
}
let swapLetter1 = swapCase1("aBcDe");
console.log(swapLetter1);

// ----------------------------------------------------------------------------//

/**
 * Concatenate a specific string
 * for a specific number of tiems
 * input : "hello!"
 * repeat : ("hello!",2)
 * output : "hello!hello!"
 */

// use repeat method
// function repeatString(str, tiems) {
//   if (tiems > 0) {
//     return str.repeat(tiems);
//   } else {
//     return "";
//   }
// }

console.log(repeatString("hello! ", 2));

// ues For loop

// function repeatString(str, tiems) {
//   let newStr = "";

//   if (typeof tiems === "undefined" || tiems === 0) {
//     return str;
//   } else {
//     for (let i = 0; i < tiems; i++) {
//       newStr += str;
//     }
//   }
//   return newStr;
// }

// ues while loop

function repeatString(str, tiems) {
  let newStr = "";
  if (tiems === 0 || typeof tiems === "undefined") {
    return str;
  }
  while (tiems > 0) {
    newStr += str;
    tiems--;
  }

  return newStr;
}

// ----------------------------------------------------------------------------//

/**
    chop a string into chunks of specific length 
    input : "practise"
    creat function stringChop("practise",2)
    output : ["pr","ac","ti","se"]
 */

//    we use for loop

function stringChop(str, n) {
  if (n > 0) {
    let newArr = [];
    for (let i = 0; i < str.length; i += n) {
      newArr.push(str.slice(i, i + n));
    }
    return newArr;
  } else {
    return str;
  }
}
// let outputNewArr = stringChop("practise", 2);
// console.log(outputNewArr);

// we use Regex to do it

// function stringChop(str, n) {
//   return n > 0 ? str.match(new RegExp(".{1," + n + "}", "g")) : [str];
// }

let outputNewArr = stringChop("practise", 2);
console.log(outputNewArr);

// ----------------------------------------------------------------------------//

/**
reversing a string
input : practise
output : esitcarp
 */
// function reversStr(str) {
//   //   let letter = str.split("");
//   //   return (strRevers = letter.reverse().join(""));
//   return str.split("").reverse().join("");
// }
let outputReversStr = reversStr("good");
console.log(outputReversStr);

// we use for loop
function reversStr(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

// ----------------------------------------------------------------------------//

/**
write a javascript program to 
create a new string adding "Pr"
in front of a given string.
If the given string begins with "Pr"
the return the original string.
exp: input string = "practise"
  -> output = "practise"
  if input = "aaa" -> output = "praaa"
  if input = "bbb" -> output = "prbbb" 
 */

function addStr(str) {
  if (str === null || str === undefined || str.substr(0, 2) === "pr") {
    return str;
  } else {
    return "pr" + str;
  }
}
let outputAddStr = addStr("aa");
console.log(outputAddStr);

var reverse = function (x) {
  lastValue = 0;
  while (x) {
    lastValue = lastValue * 10 + (x % 10);
    x = Math.round(x / 10);
  }
  return lastValue;
};

var myAtoi = function (s) {
  let pars = parseInt(s);
  if (isNaN(pars)) {
    return 0;
  } else {
    return pars;
  }
};

function count(str, find) {
  let myStr = str.toLowerCase().split(" ");
  // return myStr.reduce(function (acc, current) {
  //   if (!acc[find]) {
  //     acc[find] = 0;
  //   }
  //   if (current === find) {
  //     acc[find]++;
  //   }
  //   return acc;
  // }, {}[find]);

  // we can use filter method

  return myStr.filter(function (result) {
    return result === find;
  }).length;
}
let outputCount = count("Have a nice day have have", "have");
console.log(outputCount);

// ----------------------------------------------------------------------------//

// Example:
// console.log(repeatString("a", 4));
// output: "aaaa";
// console.log(repeatString("a"));
// output:"Error in string or count"

function repeatString(str, count) {
  if (str == null || count == null || count === Infinity || count < 0) {
    return "Error in string or count";
  } else {
    // 1. we can use repeat
    // return str.repeat(count);
    // 2. we can use for Loop
    // let text = " ";
    // for (let i = 0; i < count; i++) {
    //   text += str;
    // }
    // return text;
    // 3. we can replace in array
    // let text = [];
    // for (let i = 0; i < count; i++) {
    //   text.push(str);
    // }
    // return text.join("");
    // 4. we can replace in Array other way

    count = count | 0;
    return Array(count + 1).join(str);
  }
}

let outputRepeatString = repeatString("a", 3);
console.log(outputRepeatString);

// ----------------------------------------------------------------------------//

// Truncate a String to a certain number of words
// Example:
// console.log(truncate("Have a nice day",3))
// output "Have a nice day"

function truncate(str, limit) {
  let myStr = str.split(" ");
  // 1. we can use a method : slice the same result
  // return myStr.slice(0, limit).join(" ");
  // 2. we can use a method : splice the same result
  // return myStr.splice(0, limit).join(" ");
  //  3. we alos can use for of loop for this
  let newArr = [];
  let i = 0;
  for (const value of myStr) {
    if (i === limit) {
      break;
    }
    newArr.push(value);
    i++;
  }
  return newArr.join(" ");
}
let outputTruncate = truncate("Have a nice day", 2);
console.log(outputTruncate);

// ----------------------------------------------------------------------------//

/**
 * Alphabetze a given string
 * Example: input -> str = "abdcefg"
 * output -> "abcdefg"
 */

function alphabetzeString(str) {
  // we can use sort method
  // let myStr = str.split("");
  // return myStr.sort().join("").trim();

  // we can use for loop method

  let myStr = str.split("");
  let temp;
  for (let i = 0; i < myStr.length; i++) {
    for (let j = i + 1; j < myStr.length; j++) {
      // console.log("this str i", myStr[i]);
      // console.log("this str j", myStr[j]);
      // console.log("this temp          ", temp);
      if (myStr[i] > myStr[j]) {
        temp = myStr[i];
        myStr[i] = myStr[j];
        myStr[j] = temp;
      }
    }
  }
  return myStr.join("").trim();
}
let outputAlphabetzeString = alphabetzeString("abdefc");
console.log(outputAlphabetzeString);

// ----------------------------------------------------------------------------//

/**
 * Factorialize a number in javaScript
 * Example : input -----> output
 *           factorialize(0)     1 // 0! = 1
 *           factorialize(1)     1 // 0! = 1
 *           factorialize(2)     2 // 0! = 2 * 1 =    2
 *           factorialize(3)     6 // 0! = 3 * 2 * 1 = 6
 */

function factorialize(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  // we can use for loop
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
  // we can use for loop too with decrease
  // for (let i = num - 1; i >= 1; i--) {
  //   console.log(num, "*", i);
  //   num = num * i;
  // }
  // return num;
  // we can use while loop
  // let newNum = num;
  // while (num > 1) {
  //   num--;
  //   newNum = newNum + num;
  // }
  // return newNum;
}
let outputfactorialize = factorialize(5);
console.log(outputfactorialize);

// ----------------------------------------------------------------------------//

/**
 * Returns an array element
 * is truncatrd after n element still remaining
 * the truncation starting with index 0.
 *
 * Example : input ->                       output
 *           salsher([1,2,3],2)              [3]
 *           salsher([1,2,3,4],3)            [4]
 *           salsher(["a","b","c","d"],2)    ["c","d"]
 */

function salsher(arr, count) {
  if (count === 0) return arr;
  return arr.slice(count);
}
let outputSlsher = salsher(["a", "b", "c", "d"], 1);
console.log(outputSlsher);

// ----------------------------------------------------------------------------//

/**
 * Return true if the string in the first element
 * of the array contains all of the letters
 * of the string in the second element of the array
 *
 * Example : input ->                     output
 *           mutation(["hello","hel"])     true
 *           mutation(["hello","hey"])     false
 */

function mutation(arr) {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();
  for (let i = 0; i < secondWord.length; i++) {
    if (!firstWord.indexOf(secondWord)) {
      return true;
    }
  }
  return false;
}
let outputMutation = mutation(["hello", "hel"]);
console.log(outputMutation);

// ----------------------------------------------------------------------------//

/**
 * Remove falsy values from an array
 * Falsy values in javaScript are :
 * false, null, 0, undefinde,"", NaN
 *
 * Example : input ->                           output
 *           bouncer([7,"hello",null,false])    [7,"hello"]
 *           bouncer(["A",null,"B"])            ["a","b"]
 */
function bouncer(arr) {
  // let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i]) {
  //     newArr.push(arr[i]);
  //   }
  // }
  // return newArr;
  // we try with filter method
  return arr.filter(function (item) {
    return item;
  });
}
let outputBouncer = bouncer([7, "hello", null, false, undefined, "a", ""]);
console.log(outputBouncer);

// ----------------------------------------------------------------------------//

/**
 * Remove all element from the initial
 * array that are of the same value
 * as these arguments
 *
 * Example : input ->                           output
 *           destroye([1,2,3],2,3)               [1]
 *           destroye([1,2,3],1,2,3)             []
 */

function destroye(arr) {
  // let args = Array.from(arguments);
  // args.splice(0, 1);
  // let targets = args;
  // let newArr = [];
  // for (let num of arr) {
  //   if (targets.indexOf(num) === -1) {
  //     newArr.push(num);
  //   }
  // }
  // return newArr;

  // we can use filter method
  let args = Array.from(arguments);
  args.splice(0, 1);
  let targets = args;
  return arr.filter(function (num) {
    return targets.indexOf(num) === -1;
  });
}

let outputDestroye = destroye([1, 2, 3], 1, 2);
console.log(outputDestroye);

/**
 * Write a generator function that returns a generator object which yields the fibonacci sequence.

   The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

   The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.
   Example 1:

   Input: callCount = 5             fibGenerator();gen.next().value; // 2
   Output: [0,1,1,2,3]              gen.next().value; // 0
   Explanation:                     gen.next().value; // 1
   Example 2:                       gen.next().value; // 1
   const gen =                      gen.next().value; // 3
 
    Input: callCount = 0
    Output: []
    Explanation: gen.next() is never called so nothing is outputted
 */

let fibGenerator = function* (num) {
  let num1 = 0,
    num2 = 1,
    newArr = [],
    nextnum;
  for (let i = 1; i <= num; i++) {
    nextnum = num1 + num2;
    num1 = num2;
    num2 = nextnum;
    newArr.push(num1);
  }
  yield newArr;
};
let output2 = fibGenerator(10);
console.log(output2.next().value);
// console.log(output2.next().value);

/**
 * how to convert an Array into
 * Object in javaScript
 */

const a = ["a", "b", "c", "d"];
// 1. we use spread method
// const b = { ...a };
// 2. we use assign method
const b = Object.assign({}, a);
console.log(b);
// 3. we usefromEntries method
//  object created by key-value entries for properties and methods
const d = [["a", "b"]];
const c = Object.fromEntries(d);
console.log(c);

var findMedianSortedArrays = function (nums1, nums2) {
  let numConcat = [...nums1, ...nums2].sort();
  console.log(numConcat);
  let numLength = numConcat.length;
  if (numLength % 2 === 0) {
    let calNum = numConcat[Math.floor(numLength / 2)];
    console.log(calNum);
    return calNum;
  } else {
    return (numConcat[numLength / 2] + numConcat[numLength / 2 - 1]) / 2;
  }
};
findMedianSortedArrays([3], [-1, -2]);

/**
var threeSumClosest = function (nums, target) {
  let sum = 0;
  let targetIndex = nums.indexOf[target];
  if (targetIndex === 0 || targetIndex === -1) {
    // start
    sum = nums[0] + nums[1] + nums[2];
  } else if (targetIndex === nums.length - 1) {
    // end
    sum = nums[targetIndex - 2] + nums[targetIndex - 1] + nums[targetIndex];
  } else if (targetIndex === -1) {
    return 0;
  } else {
    sum = nums[targetIndex - 1] + nums[targetIndex] + nums[targetIndex + 1];
  }
  return sum;
};
let targetCal = threeSumClosest([1, 1, -1], 1);
console.log(targetCal);
 */
var join = function (arr1, arr2) {
  let obj = {};
  for (let currValue of [...arr1, ...arr2]) {
    const id = currValue.id;
    if (obj[id]) {
      obj[id] = { ...obj[id], ...currValue };
    } else {
      obj[id] = currValue;
    }
  }

  return Object.values(obj);
};

var join = function (arr1, arr2) {
  let obj = {};
  for (let currValue of [...arr1, ...arr2]) {
    obj[currValue.id] = currValue;
  }
  // for (let currValue of arr2) {
  //   obj[currValue.id] = currValue;
  // }
  return Object.values(obj);
};

// var threeSumClosest = function (nums, target) {
//   let sum = 0;
//   let matchTarget = false;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[0] === 0 && target === 0) return nums.length;
//     if (matchTarget === false) {
//       sum = sum + nums[i];
//     }
//     if (target === nums[i]) {
//       matchTarget = true;
//     }
//   }
//   return sum;
// };
// let outputThreeSumClosest = threeSumClosest([3, 2, 1, 4], 1);
// console.log(outputThreeSumClosest);

// let threeSumClosest = function (nums, target) {
//   let lengthNums = nums.length;
//   let sum = 0;
//   if (lengthNums === 0) return 0;
//   if (lengthNums <= 3) {
//     for (let index = 0; index < lengthNums; index++) {
//       sum = sum + nums[index];
//     }
//     return sum;
//   }
//   nums.sort();
//   let colsestNumsTarget = nums[0] + nums[1] + nums[2];
//   for (let i = 0; i < lengthNums; i++) {
//     for (let j = i + 1, k = lengthNums - 1; j < lengthNums - 1, j < k; ) {
//       let sum = nums[i] + nums[j] + nums[k];
//       if (sum === target) {
//         return sum;
//       } else if (sum < target) {
//         if (
//           (colsestNumsTarget < sum && sum < target) ||
//           Math.abs(target - sum) < Math.abs(target - colsestNumsTarget)
//         ) {
//           colsestNumsTarget = sum;
//         }
//         j++;
//       } else if (sum > target) {
//         if (
//           (colsestNumsTarget > sum && sum > target) ||
//           Math.abs(target - sum) < Math.abs(target - colsestNumsTarget)
//         ) {
//           colsestNumsTarget = sum;
//         }
//         k--;
//       }
//     }
//   }
//   return colsestNumsTarget;
// };

// var addTwoNumbers = function (l1, l2) {
//   return l1 + l2;
// };
// addTwoNumbers([1, 2], [1, 2]);

// let nums1 = [1, 2, 3, 4, 3];
// let nums2 = [1, 2, 3, 4, 5];

// const findMedianSortedArrays = (nums1, nums2) =>
//   [...nums1, ...nums2]
//     .sort((a, b) => a - b)
//     .filter(
//       (x, index) =>
//         index === Math.floor((nums1.length + nums2.length - 1) / 2) ||
//         index === (nums1.length + nums2.length) / 2
//     )
//     .reduce((a, b) => a + b) /
//   ((nums1.length + nums2.length) % 2 === 0 ? 2 : 1);

// var findMedianSortedArrays = function (nums1, nums2) {
//   let numConcat = [...nums1, ...nums2].sort();
//   console.log(numConcat);
//   let numLength = numConcat.length;
//   if (numLength % 2 === 1) {
//     return numConcat[Math.floor(numLength - 1) / 2];
//   } else {
//     return (numConcat[numLength / 2] + numConcat[numLength / 2 - 1]) / 2;
//   }
// };
// findMedianSortedArrays([3], [-1, -2]);

// var threeSumClosest = function (nums, target) {
//   let sum = 0;
//   let matchTarget = false;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[0] === 0 && target === 0) return nums.length;
//     if (matchTarget === false) {
//       sum = sum + nums[i];
//     }
//     if (target === nums[i]) {
//       matchTarget = true;
//     }
//   }
//   return sum;
// };

// var promiseAll = async function (functions) {
//   return await new Promise((resolve, reject) => {
//     let newArr = Array(functions.length);
//     let wait = functions.length;

//     // steps 3 and 4
//     for (let i = 0; i < functions.length; ++i) {
//       functions[i]()
//         .then((result) => {
//           newArr[i] = result;
//           if (--wait === 0) resolve(newArr);
//         })
//         .catch(reject);
//     }
//   });
// };

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let mxaValue = Number.MAX_VALUE;
  let result;
  for (let i = 0; i < nums.length; i++) {
    let start = i + 1,
      end = nums.length - 1;
    while (start < end) {
      let targetIndex = nums[i] + nums[start] + nums[end];
      if (Math.abs(targetIndex - target) < mxaValue) {
        result = targetIndex;
        mxaValue = Math.abs(targetIndex - target);
      }
      if (targetIndex === target) {
        return target;
      } else if (targetIndex < target) {
        start++;
      } else {
        end--;
      }
    }
  }
  return result;
};

/**var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let ans = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length[-2]; i += 1) {
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum > target) {
        end -= 1;
      } else {
        start += 1;
      }
      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        ans = sum;
      }
    }
  }
  return ans;
}; */

// largestNumber of Array
let nums = [1, 2, 10, 4, 5, 11];
largNum = nums[0];

for (const a of nums) {
  if (a > largNum) {
    largNum = a;
  }
}
console.log(largNum);
var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  for (let i = 0; i < l1.length; i++) {
    for (let j = 0; j < l2.length; j++) {
      sum = l1[i] + l2[j];
    }
  }
  return sum;
};
console.log(addTwoNumbers([1, 2, 3, 4][(1, 2, 3, 4)]));

var findMedianSortedArrays = function (nums1, nums2) {
  let numConcat = [...nums1, ...nums2].sort((a, b) => a - b);
  // console.log(numConcat);
  let numLength = nums1.length + nums2.length;
  numConcat
    .filter(
      (x, index) =>
        index === Math.floor((numLength - 1) / 2) || index === numLength / 2
    )
    .reduce((a, b) => a + b) / (numLength % 2 === 0 ? 2 : 1);
  return numConcat;
};
const findMedianSortedArrays = (nums1, nums2) =>
  [...nums1, ...nums2]
    .sort((a, b) => a - b)
    .filter(
      (x, index) =>
        index === Math.floor((nums1.length + nums2.length - 1) / 2) ||
        index === (nums1.length + nums2.length) / 2
    )
    .reduce((a, b) => a + b) /
  ((nums1.length + nums2.length) % 2 === 0 ? 2 : 1);
findMedianSortedArrays([3], [-1, -2]);
