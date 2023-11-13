function getData() {
  setTimeout(function () {
    console.log("Time Completed");
  }, 1000);
  return [
    {
      name: "Namit",
      age: 27,
    },
  ];
}

function init() {
  const data = getData();
  console.log(data);
}

init();
