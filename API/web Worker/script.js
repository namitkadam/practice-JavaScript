const sumBtn = document.getElementById("sum-btn");
const bgBtn = document.getElementById("bg-btn");
const msg = document.getElementById("msg");
const sumOutput = document.getElementById("sum-output");

window.addEventListener("load", () => {
  console.log("load");
});
sumBtn.addEventListener("click", () => {
  const workerObj = new Worker("worker.js");
  workerObj.postMessage("Start worker");

  workerObj.onmessage = (e) => {
    sumOutput.innerHTML = `${e.data} `;
  };
});
bgBtn.addEventListener("click", () => {
  msg.innerHTML = `Hey!! `;
});
