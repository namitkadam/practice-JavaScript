"use strict";

const getElement = (key) => document.querySelector(key);

const submitBtnElem = getElement("#submit");
const updateBtnElem = getElement("#update");
const inputTitleElem = getElement("#title");
const inputBodyElem = getElement("#body");
const userTbodyElem = getElement("#usertable");
const userSelectElem = getElement("#users");
const notificationHeadingElem = getElement("#notification-heading");
const templateId = getElement("#template-id");

// -----------------------------------------getuser-----------------------------------------//

// const url = fetch("https://jsonplaceholder.typicode.com/users");
async function getuser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await res.json();
    for (const user of result) {
      let creatOption = document.createElement("option");
      creatOption.innerHTML = user.id;
      userSelectElem.appendChild(creatOption);
    }

    return result;
  } catch (error) {
    console.log("ERROR", error);
  }
  //   return await url
  //     .then((res) => res.json())
  //     .then((userData) => {
  //       //   console.log(userData);
  //       for (const userId of userData) {
  //         let creatOption = document.createElement("option");
  //         creatOption.innerHTML = userId.id;
  //         userSelectElem.appendChild(creatOption);
  //         // console.log(userId.id);
  //       }
  //     })
  //     .catch();
}
getuser();

// -----------------------------------------users Post-----------------------------------------//
// async function usersPost() {
//   try {
//     const urlPost = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const result = await urlPost.json();
//     let emtyStr = "";
//     for (const userData of result) {
//       emtyStr += `<tr>
//                         <td style="text-align: center">${userData.userId}</td>
//                         <td>${userData.title}</td>
//                         <td>${userData.body}</td>
//                         <td style="text-align: center"><i style="cursor: pointer" class="fa-solid fa-pen-to-square edit-btn" data-id=${userData.id}></i></td>
//                         <td style="text-align: center"><i style="cursor: pointer" class="fa-solid fa-trash delete-btn" data-id=${userData.id}></i></td>
//                    </tr>`;
//       userTbodyElem.innerHTML = emtyStr;
//     }
//     return result, editbtn(), deleteusers();
//   } catch (error) {
//     console.log("error", error);
//   }

//   // .then((res) => res.json())
//   // .then((userPostData) => {
//   //   let emtyStr = "";
//   //   for (const userData of userPostData) {
//   //     emtyStr += `<tr>
//   //                     <td style="text-align: center">${userData.userId}</td>
//   //                     <td>${userData.title}</td>
//   //                     <td>${userData.body}</td>
//   //                     <td style="text-align: center"><i style="cursor: pointer" class="fa-solid fa-pen-to-square edit-btn" data-id=${userData.id}></i></td>
//   //                     <td style="text-align: center"><i style="cursor: pointer" class="fa-solid fa-trash delete-btn" data-id=${userData.id}></i></td>
//   //                </tr>`;
//   //     userTbodyElem.innerHTML = emtyStr;
//   //     // console.log(userData.title);
//   //   }
// }
// usersPost();

async function usersPost() {
  try {
    const urlPost = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await urlPost.json();
    let emtyStr = "";
    for (const userData of result) {
      emtyStr += `<tr>
                        <td style="text-align: center">${userData.userId}</td>
                        <td>${userData.title}</td>
                        <td>${userData.body}</td>
                        <td style="text-align: center"><i style="cursor: pointer" class="fa-solid fa-pen-to-square edit-btn" data-id=${userData.id}></i></td>
                        <td style="text-align: center"><i style="cursor: pointer" class="fa-solid fa-trash delete-btn" data-id=${userData.id}></i></td>                        
                   </tr>`;
      userTbodyElem.innerHTML = emtyStr;
    }
    return result, editbtn(), deleteusers();
  } catch (error) {
    console.log("error", error);
  }

  // .then((res) => res.json())
  // .then((userPostData) => {
  //   let emtyStr = "";
  //   for (const userData of userPostData) {
  //     emtyStr += `<tr>
  //                     <td style="text-align: center">${userData.userId}</td>
  //                     <td>${userData.title}</td>
  //                     <td>${userData.body}</td>
  //                     <td style="text-align: center"><i style="cursor: pointer" class="fa-solid fa-pen-to-square edit-btn" data-id=${userData.id}></i></td>
  //                     <td style="text-align: center"><i style="cursor: pointer" class="fa-solid fa-trash delete-btn" data-id=${userData.id}></i></td>
  //                </tr>`;
  //     userTbodyElem.innerHTML = emtyStr;
  //     // console.log(userData.title);
  //   }
}
usersPost();

// -----------------------------------------users Edit-----------------------------------------//
function editbtn() {
  let editUers = document.querySelectorAll(".edit-btn");
  for (const editBtn of editUers) {
    editBtn.addEventListener("click", function (event) {
      submitBtnElem.style.display = "none";
      updateBtnElem.style.display = "inline-block";
      const postId = event.target.dataset.id;
      //   console.log("hey", event.target.dataset.id);
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "PATCH",
        body: JSON.stringify(),
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((editData) => {
          inputTitleElem.value = editData.title;
          inputBodyElem.value = editData.body;
        });
      updateData();
    });
  }
}

// -----------------------------------------users UpdateData-----------------------------------------//

// update Secsefull
function updateData() {
  return updateBtnElem.addEventListener("click", (event) => {
    event.preventDefault();
    submitBtnElem.style.display = "inline-block";
    updateBtnElem.style.display = "none";
    notificationHeadingElem.innerHTML = `Update Secsefull`;
    inputTitleElem.value = "";
    inputBodyElem.value = "";
    setTimeoutFnc();
  });
}

// -----------------------------------------users DELETE-----------------------------------------//

//DELETE//
function deleteusers() {
  let deleteUser = document.querySelectorAll(".delete-btn");
  for (const deleteBtn of deleteUser) {
    deleteBtn.addEventListener("click", (e) => {
      notificationHeadingElem.innerHTML = `Update Secsefull`;
      //   console.log("delet", e.target.dataset.id);
      fetch(
        `https://jsonplaceholder.typicode.com/posts/${e.target.dataset.id}`,
        {
          method: "DELETE",
        }
      );
      setTimeoutFnc();
      //   reload();
    });
  }
}

// -----------------------------------------setTimeoutFnc-----------------------------------------//

// setTimeoutFnc
function setTimeoutFnc() {
  const time = 2000;
  setTimeout(() => {
    notificationHeadingElem.innerHTML = "";
  }, time);
}

// -----------------------------------------users create-----------------------------------------//

// create
let trowElement = document.createElement("tr");
let creatTabel = document.getElementById("creat-Tabel");
let creatUserTable = document.getElementById("creat-user-table");

// function create() {
//   submitBtnElem.addEventListener("click", (e) => {
//     e.preventDefault();

//     notificationHeadingElem.innerHTML = `create Secsefull`;
//     // creatTabel.style.display = "inline-block";
//     if (inputTitleElem.value === "" || inputBodyElem.value === "") {
//       alert("Please Enter Ditails");
//     } else {
//       trowElement.innerHTML = `<tr>
//                                 <td>${inputTitleElem.value}</td>
//                                 <td>${inputBodyElem.value}</td>
//                                 <td style="text-align: center"><i style="cursor: pointer" class="fa-solid fa-pen-to-square" id ="edit"></i></td>
//                                 <td style="text-align: center"><i style="cursor: pointer" class="fa-solid fa-trash" id = "delete"></i></td>
//                               </tr>`;
//       creatUserTable.appendChild(trowElement);
//       inputTitleElem.value = "";
//       inputBodyElem.value = "";
//     }
//     console.log("click");
//     setTimeoutFnc();
//     // template
//     // template();
//   });
//   createtemp();
// }
// create();

const templateCreatUser = document.getElementById("template-creat-user");
const templateRow = document.getElementById("template-row");
const templateUser = document.getElementById("template-user");

// console.log(templateCreatUser);
function createtemp() {
  let clonTemp = templateCreatUser.content.cloneNode(true);
  clonTemp.innerHTML = "namit";
  templateCreatUser.appendChild(clonTemp).value;
  console.log(clonTemp);
}
createtemp();

function create() {
  submitBtnElem.addEventListener("click", (e) => {
    e.preventDefault();

    notificationHeadingElem.innerHTML = `create Secsefull`;
    // creatTabel.style.display = "inline-block";
    if (inputTitleElem.value === "" || inputBodyElem.value === "") {
      alert("Please Enter Ditails");
    } else {
      trowElement.innerHTML = `<tr>
                                <td>${inputTitleElem.value}</td>
                                <td>${inputBodyElem.value}</td>
                                <td style="text-align: center"><i style="cursor: pointer" class="fa-solid fa-pen-to-square" id ="edit"></i></td>
                                <td style="text-align: center"><i style="cursor: pointer" class="fa-solid fa-trash" id = "delete"></i></td>
                              </tr>`;
      creatUserTable.appendChild(trowElement);
      inputTitleElem.value = "";
      inputBodyElem.value = "";
    }
    console.log("click");
    setTimeoutFnc();
    // template
    // template();
  });
  createtemp();
}
create();

// -----------------------------------------Template-----------------------------------------//

// template
// let temp = document.getElementsByTagName("template")[0];
// function template() {
//   let clon = temp.content.cloneNode(true);
//   document.body.appendChild(clon);
//   console.log(clon, temp);
// }
