const modal = document.querySelector(".modal");
const btnOverlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
console.log(btnOpenModal);

function openClickBtn() {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  btnOverlay.classList.remove("hidden");
}
function closeClickBtn() {
  modal.classList.add("hidden");
  btnOverlay.classList.add("hidden");
}

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openClickBtn);
btnCloseModal.addEventListener("click", closeClickBtn);
btnOverlay.addEventListener("click", closeClickBtn);

document.addEventListener("keydown", esc);
function esc(e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeClickBtn();
  }
}
