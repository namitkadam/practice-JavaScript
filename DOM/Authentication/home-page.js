const welMsg = document.querySelector("#wel-msg");
const logOutBtn = document.getElementById("logOut-btn");
welMsg.innerHTML = `Welcome ${localStorage.userName}`;
logOutBtn.addEventListener("click", () => {
  localStorage.clear();
});
