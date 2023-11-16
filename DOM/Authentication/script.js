const userName = document.getElementById("user-name");
const userPassword = document.getElementById("user-password");
const loginBtn = document.getElementById("login-btn");
const loingForm = document.getElementById("loing-form");

let user = [
  { uesrName: "user1", name: "raj", password: "user12" },
  { uesrName: "namit", name: "namit", password: "12345678" },
];
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
    e.preventDefault();
  } else if (findUser.password !== userPassword.value) {
    e.preventDefault();
    alert("password not mactch");
    userPassword.style.border = "2px solid red";
  } else {
    // e.preventDefault();
    localStorage.setItem("userName", findUser.name);
  }
  //   console.log(findUser);
  //   console.log(`hey ${findUser.name}`);
});
export { user };
