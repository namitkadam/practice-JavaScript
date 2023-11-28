const userName = document.getElementById("user-name");
const userPassword = document.getElementById("user-password");
const loginBtn = document.getElementById("login-btn");
const checkBtn = document.getElementById("check-btn");

import { user } from "./userData.js";
export function loigin() {
  if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
      const findUser = user.find((user) => user.uesrName === userName.value);
      e.preventDefault();
      if (userName.value === "" || userName.value === null) {
        userName.style.border = "2px solid red";
        alert("UserName is required");
      } else if (!findUser) {
        userName.style.border = "2px solid red";
        alert("User Not Found");
      } else if (userPassword.value === "" || userPassword.value === null) {
        userPassword.style.border = "2px solid red";
        alert("Password is required");
      } else if (findUser.password !== userPassword.value) {
        userPassword.style.border = "2px solid red";
        alert("password not mactch");
      } else {
        window.location.reload();
        localStorage.setItem("userName", findUser.uesrName);
      }
    });
  }
}
loigin();

if (checkBtn) {
  checkBtn.addEventListener("click", (e) => {
    if (userPassword.type === "password") {
      userPassword.type = "text";
    } else {
      userPassword.type = "password";
    }
  });
}
if (localStorage.userName) {
  window.location.replace("./home-page.html");
}
