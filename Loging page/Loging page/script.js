const userLogin = document.getElementById("user_login");
const userPassword = document.getElementById("user_password");
const form = document.getElementById("form");
const errroEl = document.getElementById("errro");

let user = [
  { uesrName: "user1", password: "user12" },
  { uesrName: "namit", password: "12345678" },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let errorMsg = [];
  const findUserName = user.find((user) => user.uesrName === userLogin.value);
  console.log(findUserName);
  if (userLogin.value === "" || userLogin.value == null) {
    errorMsg.push("UserName is required 👦🏻👧🏻");
  } else if (!findUserName) {
    errorMsg.push("User Not Found ❌");
  } else if (userPassword.value === findUserName.password) {
    errorMsg.push("Successful Login ✅");
  } else {
    errorMsg.push("Wrong Password 🔴");
  }
  if (errorMsg.length > 0) {
    errroEl.innerHTML = errorMsg.join(", ");
  }
});
// console.log(user("namit"));
// function user1(uesrName, password) {
//   if (userLogin !== uesrName) {
//     return "wrong user Name";
//   } else if (userPassword !== password) {
//     return "wrong password";
//   } else {
//     return "🎉";
//   }
// }
// console.log(user1());
// console.log(user1("namit", 123456));
// // console.log(user.uesrName);

// function login() {
//     let errorMsg = [];
//     if (userLogin.value.trim() === "") {
//       errroEl.push("user Name is required");
//     }
//     if (userPassword.value === "") {
//       errorMsg.push("Password is required");
//     }
//     if (userPassword.value.length < 6) {
//       ("be longer than 6 charaters");
//     }
//     if (errorMsg.length > 0) {
//       // e.preventDefault();
//       errroEl.innerHTML = errorMsg.join(", ");
//     }
//   }
// if (userPassword.value.length < 6) {
//     errorMsg.push(" Be longer than 6 charaters");
//   } else if (userPassword.value.length >= 20) {
//     errorMsg.push("Password must be less than 20 charaters");
//   } else if (userPassword.value === user.password) {
//     errorMsg.push("Password cannot be password");
//   } else if (userPassword.value == findUserName.password) {
//     errorMsg.push(userPassword.value);
//   } else {
//     errorMsg.push("User Password is Wrong");
//   }
