const introCard = document.getElementById("intro");
const questionCard = document.getElementById("question");
const enterHighScoreCard = document.getElementById("enterHighScore");
const viewHighsScoreCard = document.getElementById("viewHighScore");

function startGame() {
  introCard.style.display = "none";
  questionCard.style.display = "block";

  console.log("Started");
}
function goBack() {
  console.log("go back one page");
}

function clearHighScore() {
  console.log("clear high scores");
}

// need to be able to move on to next question
function setNextQuestion() {}
// need to be able to select a answer
function selectAnswer(choice) {
  console.log("selected answer " + choice);
}

function saveHighScore() {
  var initials = document.getElementById("initials").value;
  console.log("initials=" + initials);
}
