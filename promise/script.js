// const count = true;
// let promise = new Promise(function (resolve, reject) {
//   if (count) {
//     resolve("hey");
//   } else {
//     reject("no");
//   }
// });
// console.log(promise);

// var promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("hello world");
//   }, 2000);
// });

// promise.then(function (data) {
//   console.log(data);
// });

// function job() {
// return new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("hello world");
//   }, 2000);
// });
// }
// console.log(job());

// function job(data) {
//   if (isNaN(data)) {
//     return "error";
//   }
//   if (data % 2 == 0) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("odd");
//       }, 2000);
//     });
//   }
//   if (data % 2 !== 0) return "evan";
// }
// job(2);

// function job(data) {
//   return new Promise((resolve, reject) => {
//     if (isNaN(data)) reject("error");
//     if (data % 2 === 0) {
//       setTimeout(() => {
//         console.log("odd");
//         resolve();
//       }, 1000);
//     } else {
//       setTimeout(() => {
//         console.log("even");
//         reject();
//       }, 2000);
//     }
//   });
// }
// console.log(job(1));

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve({ fistName: "namit", lastName: "kadam" });
//   }, 1000);
// });

// promise1.then((user) => {
//   console.log(user);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     let error = true;
//     if (error) {
//       resolve({ fistName: "navin", lastName: "kadam" });
//     } else {
//       reject("ERROR: Somthing went wrong");
//     }
//   }, 1000);
// });

// promise2
//   .then((users) => {
//     setTimeout(() => {
//       console.log(users);
//       return users.fistName;
//     }, 2000);
//   })
//   .then((fistName) => {
//     console.log(fistName);
//   })
//   .catch((error) => {
//     console.log("error");
//   })
//   .finally(() => console.log(`complit`));

function job(data) {
  return new Promise((resolve, reject) => {
    // let newData = isNaN(data);
    // if (!isNaN(data)) {
    //   if (data % 2 == 0) {
    //     setTimeout(() => {
    //       reject("even");
    //     }, 2000);
    //   } else {
    //     setTimeout(() => {
    //       resolve("odd");
    //     }, 1000);

    //   }
    // } else {
    //   reject("error");
    // }
    if (isNaN(data)) return reject("error");
    else if (data % 2 == 0) {
      setTimeout(() => reject("even"), 2000);
      return;
    } else {
      setTimeout(() => resolve("odd"), 1000);
      return;
    }
  });
}
let newJob = job(12);
console.log(newJob);
newJob
  .then((newJob) => {
    console.log(newJob);
  })
  .catch((error) => {
    console.log(error);
  });
document.getElementsByTagName(button);
// -------------------//
function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise = job();

promise

  .then(function () {
    console.log("Success 1");
  })

  .then(function () {
    console.log("Success 2");
  })

  .then(function () {
    console.log("Success 3");
  })

  .catch(function () {
    console.log("Error 1");
  })

  .then(function () {
    console.log("Success 4");
  });
