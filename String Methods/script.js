let stringOne = "freeCodeCamp is the best place to learn";
let stringTwo = "fontend and backend development";

// charAt()
console.log(stringOne.charAt(10));

//charCodeAt()

console.log(stringOne.charCodeAt(2));

//concat()

console.log(stringOne.concat(stringTwo));

//endsWith()

console.log(stringOne.endsWith("learn"));

//fromCharCode()

console.log(String.fromCharCode(101));

//includes()

console.log(stringTwo.includes("end"));

//indexOf()

console.log(stringTwo.indexOf("end"));

//lastIndexOf()

console.log(stringTwo.lastIndexOf("end"));

//match()

console.log(stringTwo.match("backend"));

//repeat()

console.log(stringOne.repeat(2));

//search()

console.log(stringOne.search("best"));

//slice()

console.log(stringOne.slice(2, 9));

//startsWith()

console.log(stringOne.startsWith("f"));

//substr()

console.log(stringOne.substr(4, 10));

// substring()

console.log(stringOne.substring(2, 10));

//toLowerCase

console.log(stringOne.toLowerCase());

//toUpperCase

console.log(stringOne.toUpperCase());

//trim

let nam = "          namit           ";
console.log(nam.trim());
