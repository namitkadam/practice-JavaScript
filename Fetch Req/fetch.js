const url = "https://jsonplaceholder.typicode.com/users";

function user(method, url, body = null) {
  const headers = { "content-type": "application/json" };
  return fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  }).then((res) => res.json());
}
user("GET", url).then((res) => {
  console.log(res[1]);
});

// fetch("https://jsonplaceholder.typicode.com/user")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
