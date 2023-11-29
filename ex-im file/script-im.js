// import { multiply, addition } from "./script-ex.js";
// console.log(multiply(2, 3, 4));
// console.log(addition(2, 3, 4));
import * as ex from "./script-ex.js";

console.log(ex.multiply(2, 3, 4));
console.log(ex.addition(2, 3, 4));

import { studentMarks } from "./script-ex.js";

console.log(studentMarks);

const totalMarksGt120 = studentMarks
  .filter((totalMark) => {
    let allSub = totalMark.sub1 + totalMark.sub2 + totalMark.sub3;
    return allSub > 120;
  })
  .map((y) => y.SName);
console.log("totalMarksGt120", totalMarksGt120.join(", "));
