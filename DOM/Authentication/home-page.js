const welMsg = document.querySelector("#wel-msg");
const logOutBtn = document.getElementById("logOut-btn");
import { user } from "./userData.js";

const findUser = user.find((users) => users.uesrName === localStorage.userName);
if (!localStorage.userName) {
  window.location.replace("./index.html");
} else {
  welMsg.innerHTML = `Welcome ${findUser.name}`;
}
if (!localStorage.userName) window.history.back();
logOutBtn.addEventListener("click", () => {
  localStorage.clear();
});
