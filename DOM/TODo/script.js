const inputTodo = document.querySelector(".input-task");
const inputAdd = document.querySelector(".input-add");

function addTodo() {
  if (inputTodo.value.trim() == "") {
    alert("Please Enter Task");
  } else {
    let liElement = document.createElement("li");
    liElement.innerHTML = `<input type="checkbox"/> ${inputTodo.value}<i class="fa-solid fa-trash"></i>`;
    inputAdd.appendChild(liElement);

    inputTodo.value = "";
    liElement.querySelector("i").addEventListener("click", deleteTodo);
    function deleteTodo() {
      liElement.remove();
    }
    liElement.querySelector("input").addEventListener("click", selectTodo);
    function selectTodo() {
      if (this.checked === true) {
        liElement.style.textDecoration = "line-through";
      } else {
        liElement.style.textDecoration = "none";
      }
    }
  }
}
