const inputTodo = document.querySelector(".input-task");
const inputAddList = document.querySelector(".input-add");
let toDoListArray = [];

function addTodo() {
  if (inputTodo.value.trim() === "") {
    alert("Please Enter Task");
  } else {
    toDoListArray.push(inputTodo.value);
    inputAddList.innerHTML = "";
    for (i = 0; i < toDoListArray.length; i++) {
      let liElement = document.createElement("li");
      liElement.innerHTML = `<input type="checkbox" /> ${toDoListArray[i]}<i class="fa-solid fa-trash"></i>`;
      inputAddList.appendChild(liElement);
      inputTodo.value = "";
      //   let toDoListJosn = JSON.stringify(toDoListArray);

      //   console.log(toDoListJosn, liElement, toDoListArray);

      liElement.querySelector("i").addEventListener("click", deleteTodo);
      function deleteTodo() {
        liElement.remove(toDoListArray.splice(toDoListArray[i], 1));
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
}

// function addTodo() {
//   if (inputTodo.value.trim() == "") {
//     alert("Please Enter Task");
//   } else {
//     let liElement = document.createElement("li");
//     liElement.innerHTML = `<input type="checkbox" /> ${inputTodo.value}<i class="fa-solid fa-trash"></i>`;
//     inputAddList.appendChild(liElement);

//     inputTodo.value = "";
//     liElement.querySelector("i").addEventListener("click", deleteTodo);
//     function deleteTodo() {
//       liElement.remove();
//     }
//     liElement.querySelector("input").addEventListener("click", selectTodo);
//     function selectTodo() {
//       if (this.checked === true) {
//         liElement.style.textDecoration = "line-through";
//       } else {
//         liElement.style.textDecoration = "none";
//       }
//     }
//   }
// }
