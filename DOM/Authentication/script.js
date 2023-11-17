const userName = document.getElementById("user-name");
const userPassword = document.getElementById("user-password");
const loginBtn = document.getElementById("login-btn");

let user = [
  { uesrName: "user1", name: "Raj", password: "user12" },
  { uesrName: "namit", name: "Namit", password: "12345678" },
];
export function loigin() {
  if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
      const findUser = user.find((user) => user.uesrName === userName.value);

      if (userName.value === "" || userName.value === null) {
        e.preventDefault();
        userName.style.border = "2px solid red";
        alert("UserName is required");
      } else if (!findUser) {
        e.preventDefault();
        userName.style.border = "2px solid red";
        alert("User Not Found");
      } else if (userPassword.value === "" || userPassword.value === null) {
        e.preventDefault();
        userPassword.style.border = "2px solid red";
        alert("Password is required");
      } else if (findUser.password !== userPassword.value) {
        e.preventDefault();
        userPassword.style.border = "2px solid red";
        alert("password not mactch");
      } else {
        localStorage.setItem("userName", findUser.name);
      }
    });
  }
}
loigin();
