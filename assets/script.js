const introCard = document.getElementById("intro");
const questionCard = document.getElementById("question");
const enterHighScoreCard = document.getElementById("enterHighScore");
const viewHighsScoreCard = document.getElementById("viewHighScore");

function startGame() {
  introCard.style.display = "none";
  questionCard.style.display = "block";

  console.log("Started");
}
// need to be able to move on to next question
function setNextQuestion() {}
// need to be able to select a answer
function selectAnswer() {}
