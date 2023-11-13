// "use strict";
const save = document.getElementById("save");
const delet = document.getElementById("delet");

/**

// let uesrs = user("namit", "kadam");
// console.log(uesrs);

// GET //

// let url = fetch("https://jsonplaceholder.typicode.com/users");
// url
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     for (let id in data) {
//       console.log(data[id].name);
//     }
//   })
//   .catch((error) => console.log(error));

 */

/**
// // save //
// save.addEventListener("click", function (e) {
//   e.preventDefault();
//   let obj = {
//     fname: document.getElementById("fname").value,
//     lname: document.getElementById("lname").value,
//   };
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(obj),
//     headers: { "content-type": "application/json" },
//   })
//     .then((resp) => resp.json())
//     .then((data) => console.log(data));
// });

 */

/**
  
//edit //

edit.addEventListener("click", function (e) {
  e.preventDefault();
  let obj = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
  };
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify(obj),
    headers: { "content-type": "application/json" },
  })
    .then((resp) => resp.json())
    .then((data) => console.log(data));
});

*/

/**
 
 
// delete //

delet.addEventListener("click", function (e) {
  e.preventDefault();
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
});

function user(method, url, body = null) {
  const headers = { "content-type": "application/json" };
  return fetch(url).then((res) => res.json());
}
user("GET", url, { name: "namit", last: "kadam" })
  .then((response) => {
    console.log(response);
  })
  .catch();

function userPost(method, url, body = null) {
  const headers = { "content-type": "application/json" };
  return fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  }).then((res) => res.json());
}
userPost("POST", url, { name: "namit", last: "kadam" })
  .then((response) => {
    console.log(response);
  })
  .catch();
*/
// ----------------------------------------------------------------------//

const submit = document.getElementById("submit");
const userId = document.getElementById("userId");
let userNotification = document.querySelector(".notification");
let h6Element = document.createElement("h1");
let update = document.getElementById("update");
let body = document.getElementById("body");
let title = document.getElementById("title");
userNotification.appendChild(h6Element);
let usertable = document.getElementById("usertable");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((dataRes) => {
    let output = "";
    for (let id in dataRes) {
      /**
        let liElement = document.createElement("li");
        userId.innerHTML = "dataRes[id].userId";
        liElement.innerHTML = `userId:-${dataRes[id].userId} title:-${dataRes[id].title} body:-${dataRes[id].body}
        <i class="fa-solid fa-pen-to-square" id ="edit"></i> <i class="fa-solid fa-trash" id = "delete"></i>`;
        data.appendChild(liElement);
        console.log(id.title);
      */

      output += `<tr style="border: border-style: inset ">
                     <td style="text-align: center">${dataRes[id].userId}</td>
                     <td class ="tbTitle">${dataRes[id].title}</td>
                     <td class ="tbBody">${dataRes[id].body}</td>
                     <td style="text-align: center"><i style="cursor: pointer" class="fa-solid fa-pen-to-square edit-btn" data-id=${dataRes[id].id}></i></td>
                     <td style="text-align: center"><i style="cursor: pointer" class="fa-solid fa-trash delete-btn" data-id=${dataRes[id].id} id = "delete"></i></td>
                </tr>`;
      usertable.innerHTML = output;
    }
    // -----------------------------------------------------------//
    // edit //
    let editUers = document.querySelectorAll(".edit-btn");

    // console.log("editUers", editUers);
    for (const editBtn of editUers) {
      editBtn.addEventListener("click", function (e) {
        // -----------------------setTimeout----------------------//
        update.style.display = "block";
        submit.style.display = "none";
        //
        console.log("BUTTON-ONLICK", e.target.dataset.id);
        const postId = e.target.dataset.id;
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
          method: "PATCH",
          body: JSON.stringify(),
          headers: { "content-type": "application/json" },
        })
          .then((resp) => resp.json())
          .then((data) => {
            title.value = data.title;
            body.value = data.body;
          });
      });
    }
    // update
    update.addEventListener("click", (e) => {
      update.style.display = "none";
      submit.style.display = "block";
      e.preventDefault();
      h6Element.innerHTML = `Edit Secsefull`;
      title.value = "";
      body.value = "";
      setTimeout(() => {
        h6Element.remove();
      }, 2000);
    });
    // -----------------------------------------------------------//
    // DELETE //
    let deleteUser = document.querySelectorAll(".delete-btn");
    // let userNotification = document.getElementById("notification");
    for (const deletBtn of deleteUser) {
      deletBtn.addEventListener("click", function (e) {
        // -----------------------setTimeout----------------------//
        h6Element.innerHTML = `Delete Secsefull`;
        setTimeout(() => {
          h6Element.remove();
        }, 2000);
        //----------------------------
        console.log("BUTTON-ONLICK", e.target.dataset.id);
        console.log("hey");
        fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
          method: "DELETE",
        });
      });
    }
    // console.log(dataRes);
  })
  .catch();

submit.addEventListener("click", function (e) {
  e.preventDefault();
  h6Element.innerHTML = `Creat Secsefull`;
  setTimeout(() => {
    h6Element.remove();
  }, 2000);
  // let url = "https://jsonplaceholder.typicode.com/posts";
  // // let userId = document.getElementById("userId").value;
  // let title = document.getElementById("title").value;
  // let body = document.getElementById("body").value;
  // let liElement = document.createElement("li");
  // // ---------------------//
  // if (title == "" && body == "" && userId == "") {
  //   alert("Please Enter Ditails");
  // } else {
  //   liElement.innerHTML = `userId:-${userId} title:-${title} body:-${body}
  //   <i class="fa-solid fa-pen-to-square" id ="edit"></i> <i class="fa-solid fa-trash" id = "delete"></i>`;
  //   userNotification.appendChild(liElement);
  //   title.value = "";
  //   // ---------------------//
  //   function userPost(method, url, body = null) {
  //     const headers = { "content-type": "application/json" };
  //     return fetch(url, {
  //       method: method,
  //       headers: headers,
  //       body: JSON.stringify(body),
  //     }).then((res) => res.json());
  //   }
  //   userPost("POST", url, {
  //     userId: userId,
  //     title: title,
  //     body: body,
  //   })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch();
  // }
});

url = `https://jsonplaceholder.typicode.com/posts/1`;
function userPost(method, url, body = null) {
  const headers = { "content-type": "application/json" };
  return fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  }).then((res) => res.json());
}
userPost("PUT", url, {
  userId: userId,
  title: title,
  body: body,
})
  .then((response) => {
    console.log(response);
  })
  .catch();

// ------------------------------------//
const users = document.getElementById("users");
let selectedId = document.getElementById("selectedId");

url = fetch("https://jsonplaceholder.typicode.com/users");
url
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    for (let id of data) {
      let optionCreat = document.createElement("option");
      optionCreat.innerHTML = id.id;
      users.appendChild(optionCreat);

      // console.log(id);
    }
  })
  .catch((error) => console.log(error));
// selectedId.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(users.value);
// });
