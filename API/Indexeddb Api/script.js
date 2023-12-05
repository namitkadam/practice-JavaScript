const form = document.querySelector("form");
const submit = document.querySelector("#submit");
const upDates = document.querySelector("#upDates");
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
    idxDb.onsuccess = () => {
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
      location.reload();
    };
    console.log(form[0].value);
  }
});

function read() {
  let idxDb = indexedDB.open("client", 1);
  idxDb.onsuccess = () => {
    let res = idxDb.result;
    let tran = res.transaction("data", "readonly");
    let store = tran.objectStore("data");
    let cursor = store.openCursor();
    cursor.onsuccess = () => {
      let curRes = cursor.result;
      if (curRes) {
        tbody.innerHTML += `
        <tr>
        <td>${curRes.value.name}</td>
        <td>${curRes.value.Phone}</td>
        <td>${curRes.value.Email}</td>
        <td>${curRes.value.Address}</td>
        <td style="cursor: pointer" onclick="updates(${curRes.key})">Update</td>
        <td style="cursor: pointer" onclick="del(${curRes.key})">Delete</td>
        </tr>
        `;
        curRes.continue();
      }
    };
  };
}

read();

let upDatesKey;
function updates(e) {
  submit.style.display = "none";
  upDates.style.display = "inline-block";
  upDatesKey = e;
}

upDates.addEventListener("click", () => {
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
});

function del(e) {
  let indxDb = indexedDB.open("client", 1);
  indxDb.onsuccess = () => {
    let res = indxDb.result;
    let tranx = res.transaction("data", "readwrite");
    let store = tranx.objectStore("data");
    store.delete(e);
    alert("Delete successfully");
    location.reload();
  };
}
