"use Strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscores = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function displayNumber(number) {
  document.querySelector(".number").textContent = number;
}

function displayScore(score) {
  document.querySelector(".score").textContent = score;
}

function displayHighscore(highscore) {
  document.querySelector(".highscore").textContent = highscore;
}

// document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", checkScore);
function checkScore() {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //   When there is no input
  if (!guess) {
    displayMessage("⛔ No number!");
  }
  //   when guess is too highe
  if (guess > 20) {
    displayMessage("📈 Number too high... !");
  }
  //   when guess is too low
  else if (guess < 0) {
    displayMessage("📉 Number too Low... !");
  }
  //   When player wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Corrrect Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    displayNumber(secretNumber);
    document.querySelector(".number").style.width = "200px";
    if (score > highscores) {
      highscores = score;
      displayHighscore(highscores);
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score = score - 1;
      displayScore(score);
    } else {
      displayMessage("💥 You lost the game");
      displayScore("0");
    }
  }
}

//   When guess to high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📈 Too high!";
//       score = score - 1;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "💥 You lost the game";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
//   //   When guess to low
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📉 Too low!";
//       score = score - 1;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "💥 You lost the game";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// }
document.querySelector(".again").addEventListener("click", reste);
function reste() {
  score = 20;
  highscores = 0;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing . . .");
  displayScore(score);
  displayNumber("?");
  displayHighscore(highscores);
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "150px";
}
