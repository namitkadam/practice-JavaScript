function user(method, url, body = null) {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.response = Array(10);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
      if (xhr.status >= 400) {
        rej(xhr.response);
        console.log("failed!");
      } else {
        res(xhr.response);
        console.log(xhr);
        console.log(xhr.response);
      }
    };

    xhr.send(JSON.stringify(body));
  });
}
const url = "https://jsonplaceholder.typicode.com/users";

// user("GET", url);

user("get", url, {
  name: "namit",
  age: 29,
});
