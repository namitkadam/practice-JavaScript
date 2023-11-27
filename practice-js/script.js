// const staffsDetails = [
//   { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
//   { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
//   { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
//   { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" },
// ];

// const names = ["Alice", "Bob", "Charlie"];

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const num = [1, 2, 3, 4, 5, 6];
// console.log(num.length);

// // forEach Method
// console.log("forEach Method");

// num.forEach((old, newnum) =>
//   console.log(`old: ${old},newnum: ${newnum} total: ${old * newnum}`)
// );

// names.forEach((name) => console.log(`Hello ${name}`));

// staffsDetails.forEach((staffDetail) => {
//   let sentence = `I am ${staffDetail.name} a staff of Royal Suites.`;
//   console.log(sentence);
// });

// // use while loop
// console.log("while Loop");
// let i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// // use For Loop
// console.log("For Loop");
// for (i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// // join Method
// console.log("join Method");
// console.log(fruits.join(" * "));

// // pop Method
// console.log("pop Method");
// console.log(fruits.pop());

// // String Method
// console.log("String Methods");
// console.log(fruits.toString());

// // push Method
// console.log("push Method");
// console.log(
//   staffsDetails.push({ name: "namit", age: 28, salary: 2000, currency: "USD" })
// );
// console.log(staffsDetails);

const studentMarks = [
  { SName: "James Walker", sub1: 40, sub2: 45, sub3: 35 },
  { SName: "Velma Clemons", sub1: 41, sub2: 35, sub3: 42 },
  { SName: "Kibo Underwood", sub1: 40, sub2: 46, sub3: 44 },
  { SName: "Louis Mcgee", sub1: 32, sub2: 42, sub3: 39 },
  { SName: "Phyllis Paul", sub1: 30, sub2: 40, sub3: 43 },
  { SName: "Zenaida Decker", sub1: 40, sub2: 34, sub3: 32 },
  { SName: "Gillian Tillman", sub1: 38, sub2: 41, sub3: 44 },
  { SName: "Constance Boone", sub1: 35, sub2: 39, sub3: 42 },
  { SName: "Giselle Lancaster", sub1: 44, sub2: 46, sub3: 48 },
  { SName: "Kirsten Mcdowell", sub1: 40, sub2: 43, sub3: 46 },
];

// for (const sub1Mark of studentMarks) {
//   if (sub1Mark.sub1 >= 40)
//     console.log(` Sub1 greater than 40 marks studen name: ${sub1Mark.SName}`);
// }

// console.log(" greater than 80 marks studen name");
// for (const sub2sub3Mark of studentMarks) {
//   if (sub2sub3Mark.sub2 + sub2sub3Mark.sub3 > 80) {
//     console.log(
//       `sub2 & sub3 greater than 80 marks studen name: ${sub2sub3Mark.SName}`
//     );
//   }
// }

// console.log("Total greater than 120 marks");
// for (const totalMark of studentMarks) {
//   let totalMarks = totalMark.sub1 + totalMark.sub2 + totalMark.sub3;
//   if (totalMarks > 120) {
//     console.log(`Total greater than 120 marks studen name ${totalMark.SName}`);
//   }
// }

// console.log("Total marks");
// for (const totalMark of studentMarks) {
//   let totalMarks = totalMark.sub1 + totalMark.sub2 + totalMark.sub3;

//   console.log(`${totalMark.SName}Total marks is ${totalMarks}`);
// }

// for (const totalMark of studentMarks) {
//   let a = totalMark.sub1;
//   a.forEach((total) => {
//     sum += total;
//   });
//   console.log(sum);
// }

const sub1MarkGt40 = studentMarks
  .filter((sub) => {
    return sub.sub1 > 40;
  })
  .map((s) => s.SName);

console.log(
  `Sub1 greater than 40 marks studen names are`,
  sub1MarkGt40.join(", ")
);

const subMarkGt80 = studentMarks
  .filter((sub) => {
    return sub.sub2 > 40 && sub.sub3 > 40;
  })
  .map((x) => x.SName);

console.log("subMarkGt80", subMarkGt80.join(", "));

const totalMarksGt120 = studentMarks
  .filter((totalMark) => {
    let allSub = totalMark.sub1 + totalMark.sub2 + totalMark.sub3;
    return allSub > 120;
  })
  .map((y) => y.SName);
console.log("totalMarksGt120", totalMarksGt120.join(", "));

const totalMark = studentMarks.reduce(
  (op, sn) => {
    op.sub1 += sn.sub1;
    op.sub2 += sn.sub2;
    op.sub3 += sn.sub3;
    return op;
  },
  { sub1: 0, sub2: 0, sub3: 0 }
);
console.log("totalMark", totalMark);
