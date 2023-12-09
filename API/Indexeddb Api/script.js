// const form = document.querySelector("form");
// const submit = document.querySelector("#submit");
// const upDatesBtn = document.querySelector("#upDates-btn");
// const tbody = document.querySelector("tbody");
// const table = document.querySelector("table");

// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (
//     form[0].value === "" ||
//     form[1].value === "" ||
//     form[2].value === "" ||
//     form[3].value === ""
//   ) {
//     alert("Entar the ditails");
//   } else {
//     let idxDb = indexedDB.open("client", 1);
//     idxDb.onupgradeneeded = () => {
//       let res = idxDb.result;
//       res.createObjectStore("data", { autoIncrement: true });
//     };
//     idxDb.onsuccess = () => {
//       let res = idxDb.result;
//       let tran = res.transaction("data", "readwrite");
//       let store = tran.objectStore("data");
//       store.put({
//         name: form[0].value,
//         Phone: form[1].value,
//         Email: form[2].value,
//         Address: form[3].value,
//       });
//       alert("data has been added");
//       location.reload();
//     };
//     console.log(form[0].value);
//   }
// });

// function read() {
//   let idxDb = indexedDB.open("client", 1);
//   idxDb.onsuccess = () => {
//     let res = idxDb.result;
//     let tran = res.transaction("data", "readonly");
//     let store = tran.objectStore("data");
//     let cursor = store.openCursor();
//     cursor.onsuccess = () => {
//       let curRes = cursor.result;
//       if (curRes) {
//         tbody.innerHTML += `
//         <tr>
//         <td>${curRes.value.name}</td>
//         <td>${curRes.value.Phone}</td>
//         <td>${curRes.value.Email}</td>
//         <td>${curRes.value.Address}</td>
//         <td class="edit-btn" style="cursor: pointer" data-id= ${curRes.key} >Edit</td>
//         <td style="cursor: pointer" onclick="del(${curRes.key})">Delete</td>
//         </tr>
//         `;
//         curRes.continue();
//         // console.log(curRes.value);
//       }
//     };
//   };
// }
// {
//   /* <td class="edit-btn" style="cursor: pointer" onclick="updates(${curRes.key})" data-id= ${curRes.key} >Edit</td>  */
// }
// read();

// // let upDatesKey;
// // function updates(e) {
// //   submit.style.display = "none";
// //   upDatesBtn.style.display = "inline-block";
// //   console.log(e);
// //   upDatesKey = e;
// //   // console.log(curRes.value);
// // }

// upDatesBtn.addEventListener("click", () => {
//   let idxDb = indexedDB.open("client", 1);
//   idxDb.onsuccess = () => {
//     let res = idxDb.result;
//     let tranx = res.transaction("data", "readwrite");
//     let store = tranx.objectStore("data");
//     store.put(
//       {
//         name: form[0].value,
//         Phone: form[1].value,
//         Email: form[2].value,
//         Address: form[3].value,
//       },
//       upDatesKey
//     );
//     alert("update successfully");
//     location.reload();
//   };
// });

// function del(e) {
//   let indxDb = indexedDB.open("client", 1);
//   indxDb.onsuccess = () => {
//     let res = indxDb.result;
//     let tranx = res.transaction("data", "readwrite");
//     let store = tranx.objectStore("data");
//     store.delete(e);
//     alert("Delete successfully");
//     location.reload();
//   };
// }

const form = document.querySelector("form");
const submit = document.querySelector("#submit");
const upDatesBtn = document.querySelector("#upDates-btn");
const tbody = document.querySelector("tbody");
const table = document.querySelector("table");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    form[0].value === "" ||
    form[1].value === "" ||
    form[2].value === "" ||
    form[3].value === ""
  ) {
    alert("Entar the ditails");
  } else {
    let idxDb = indexedDB.open("client", 1);
    idxDb.onupgradeneeded = () => {
      let res = idxDb.result;
      res.createObjectStore("data", { autoIncrement: true });
    };
    idxDb.onsuccess = async () => {
      let res = idxDb.result;
      let tran = res.transaction("data", "readwrite");
      let store = tran.objectStore("data");
      store.put({
        name: form[0].value,
        Phone: form[1].value,
        Email: form[2].value,
        Address: form[3].value,
      });
      alert("data has been added");
      const result = await getIndexDbData();
      displayUserData(result || []);
    };
    console.log(form[0].value);
  }
});

async function read() {
  // let idxDb = indexedDB.open("client", 1);
  // idxDb.onsuccess = () => {
  //   let res = idxDb.result;
  //   let tran = res.transaction("data", "readonly");
  //   let store = tran.objectStore("data");
  //   let cursor = store.openCursor();
  //   cursor.onsuccess = () => {
  //     let curRes = cursor.result;
  //     if (curRes) {
  //       tbody.innerHTML += `
  //       <tr>
  //       <td>${curRes.value.name}</td>
  //       <td>${curRes.value.Phone}</td>
  //       <td>${curRes.value.Email}</td>
  //       <td>${curRes.value.Address}</td>
  //       <td onclick="edit(${curRes.key})" style="cursor: pointer" data-id= ${curRes.key} >Edit</td>
  //       <td style="cursor: pointer" onclick="del(${curRes.key})">Delete</td>
  //       </tr>
  //       `;
  //       curRes.continue();
  //       console.log(curRes.value);
  //     }
  //     // find();
  //   };
  // };
  const result = await getIndexDbData();
  displayUserData(result || []);
}
read();
upDatesBtn.addEventListener("click", () => {
  if (
    form[0].value === "" ||
    form[1].value === "" ||
    form[2].value === "" ||
    form[3].value === ""
  ) {
    alert("Entar the ditails");
  } else {
    let idxDb = indexedDB.open("client", 1);
    idxDb.onsuccess = () => {
      let res = idxDb.result;
      let tranx = res.transaction("data", "readwrite");
      let store = tranx.objectStore("data");
      store.put(
        {
          name: form[0].value,
          Phone: form[1].value,
          Email: form[2].value,
          Address: form[3].value,
        },
        upDatesKey
      );
      alert("update successfully");
      location.reload();
    };
  }
});

let editKey;
function edit(e) {
  let indxDb = indexedDB.open("client", 1);
  indxDb.onsuccess = () => {
    let res = indxDb.result;
    let tranx = res.transaction("data", "readwrite");
    let store = tranx.objectStore("data");
    let open = store.openCursor(e);
    open.onsuccess = () => {
      open = open.result;
      // console.log(open.value);
      form[0].value = open.value.name;
      form[1].value = open.value.Phone;
      form[2].value = open.value.Email;
      form[3].value = open.value.Address;
    };
  };
  submit.style.display = "none";
  upDatesBtn.style.display = "inline-block";
  editKey = e;
}

function del(key) {
  let indxDb = indexedDB.open("client", 1);
  indxDb.onsuccess = () => {
    let res = indxDb.result;
    let tranx = res.transaction("data", "readwrite");
    let store = tranx.objectStore("data");
    store.delete(key);
    alert("Delete successfully");
    // location.reload();
    console.log(key);
  };
}

const searchForm = document.getElementById("search-form");
const searchBtn = document.getElementById("search-btn");
const clearBtn = document.getElementById("clear-btn");
const tbodys = document.getElementById("tbody");
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  function getAllUser(e) {
    let indxDb = indexedDB.open("client", 1);
    indxDb.onsuccess = () => {
      let res = indxDb.result;
      let tranx = res.transaction("data", "readwrite");
      let store = tranx.objectStore("data");
      let getReq = store.getAll();
      // console.log(getReq);
      getReq.onsuccess = (e) => {
        getReq = e.target;
        console.log(e.target);
        getReqArrs = getReq.result;
        let findUser = getReqArrs.filter(
          (usserName) => usserName.name === searchForm[0].value
        );
        console.log(findUser);
        displayUserData(users);
        tbody.innerHTML = `    
        <tr>
        <td>${findUser.name}</td>
        <td>${findUser.Phone}</td>
        <td>${findUser.Email}</td>
        <td>${findUser.Address}</td>
        <td style="cursor: pointer" >Edit</td> 
        <td style="cursor: pointer" >Delete</td>
        </tr>`;
      };
    };
  }
  getAllUser();

  console.log(searchForm[0].value);
});

clearBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const result = await getIndexDbData();
  displayUserData(result || []);
});

function getIndexDbData() {
  return new Promise((res, rej) => {
    let idxDb = indexedDB.open("client", 1);
    idxDb.onsuccess = () => {
      let result = idxDb.result;
      let tran = result.transaction("data", "readonly");
      let store = tran.objectStore("data");
      let cursor = store.getAll();
      cursor.onsuccess = () => {
        res(cursor.result || []);
      };
    };
  });
}

function displayUserData(users) {
  tbody.innerHTML = "";
  for (let key = 0; key < users.length; key++) {
    const user = users[key];
    tbody.innerHTML += `
    <tr>
    <td>${user.name}</td>
    <td>${user.Phone}</td>
    <td>${user.Email}</td>
    <td>${user.Address}</td>
    <td onclick="edit(${key})" style="cursor: pointer" >Edit</td> 
    <td onclick="del(${key})" style="cursor: pointer" >Delete</td>
    </tr>
    `;
  }
}
