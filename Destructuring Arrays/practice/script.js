let str = "namit kadam";
let strRever = "";

// String Revers

// for (let i = 0; i < str.length; i++) {
//   strRever = str.charAt(i) + strRever;
// }

// or

for (let i = str.length; i > 0 - 1; i--) {
  strRever += str.charAt(i);
  //   console.log(i);
}
console.log(str, ":", strRever);

// ----------------------------------------------------------------------//

// total char

let char = str.split("");

// let prit = {};
// char.forEach(function (char) {
//   prit[char] = (prit[char] || 0) + 1;
// });
// console.log(prit);

// or

let obj = {};
for (let i = 0; i < str.length; i++) {
  let key = str.charAt(i);
  //   console.log(obj[key], key);
  if (obj[key]) {
    obj[key] = obj[key] + 1;
  } else {
    obj[key] = 1;
  }
}
console.log(obj);

// ----------------------------------------------------------------------//

// let txt = str.toLowerCase();
// let obj = [];

// for (let i = 0; i < txt.length; i++) {
//   let key = txt.charAt(i);
//   //   console.log(obj[key], key);
//   if (obj[key]) {
//     obj[key] = obj[key] + 1;
//   } else {
//     obj[key] = 1;
//   }
// }
// console.log(str, ":", obj);

// ----------------------------------------------------------------------//

function createCounter(init) {
  let counter = init;
  function increment() {
    return ++counter;
  }
  function decrement() {
    return --counter;
  }
  function reset() {
    return init;
  }
  return { increment, decrement, reset };
}
let inc = createCounter(5);

// ----------------------------------------------------------------------//

// function creattUser(name,age,phoneNo,email) {
//     this.name = name
//     this.age = age
//     this.getUser=function () {
//         return {name, age}
//     }
//    return {name,age}
// }
// creattUser('namit',19)

// ----------------------------------------------------------------------//

function creattUser(name, age, phoneNo, email) {
  let user = {
    name: name,
    age: age,
    phoneNo: phoneNo,
    email: email,
  };
  const getUser = function () {
    return user;
  };
  const editUser = function (name, age, phoneNo, email) {
    user = { name, age, phoneNo, email };
    return user;
  };
  const deleteUser = function () {
    user = { name: "", age: "", phoneNo: "", email: "" };
    return user;
  };
  const resetUser = function () {
    user = { name: name, age: age, phoneNo: phoneNo, email: email };
    return user;
  };
  return { getUser, editUser, deleteUser, resetUser };
}

let expects = function (val) {
  const toBe = function (val2) {
    if (val === val2) {
      return { value: true };
    } else {
      return { error: "Not Equal" };
    }
  };
  const notBe = function (val2) {
    if (val !== val2) {
      return { value: true };
    } else {
      return "Equal";
    }
  };
  return { toBe, notBe };
};

var chnk = function (arr, size) {
  let arra = [];
  for (let i = 0; i < arr.length; i += size) {
    arra.push(arr.slice(i, i + size));
  }
  return arra;
};
