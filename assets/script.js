const introCard = document.getElementById("intro");
const questionCard = document.getElementById("question");
const enterHighScoreCard = document.getElementById("enterHighScore");
const viewHighsScoreCard = document.getElementById("viewHighScore");

const cards = [introCard, questionCard, enterHighScoreCard, viewHighsScoreCard];

const questionBank = new Array();
questionBank.push([
  "How many miles did Goku run to see his Sensei?",
  "5,000",
  "15,000",
  "10,000",
  "50,000",
]);
questionBank.push([
  "Who is Trunk's father?",
  "Gohan",
  "Vegeta",
  "Piccolo",
  "Goku",
]);

const correctAnswers = ["10,000", "Vegeta"];

var nextQuestion = 0;
var correctAnswer = "";

function turnOffAllCards() {
  // This would work for cards currently defined.
  // for(let i = 0; i < 4; i++) {
  //   cards[i].style.display = "none";
  // }'
  // Future proof work, so can add card to "cards" and automatically taken care of
  cards.forEach((card, i) => (card.style.display = "none"));
}

function startGame() {
  turnOffAllCards();
  questionCard.style.display = "block";
  showQuestion();
}

function showQuestion() {
  var questionText = document.getElementById("questionText");
  questionText.innerText = questionBank[nextQuestion][0];
  updateChoice(
    document.getElementById("answer1"),
    questionBank[nextQuestion][1]
  );

  updateChoice(
    document.getElementById("answer2"),
    questionBank[nextQuestion][2]
  );

  updateChoice(
    document.getElementById("answer3"),
    questionBank[nextQuestion][3]
  );

  updateChoice(
    document.getElementById("answer4"),
    questionBank[nextQuestion][4]
  );

  correctAnswer = correctAnswers[nextQuestion];
  nextQuestion++;
}
function updateChoice(htmlElement, value) {
  htmlElement.innerText = value;
  htmlElement.setAttribute("onclick", 'selectAnswer("' + value + '")');
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
  console.log("correct Answer is" + correctAnswer);
  showQuestion();
}

function saveHighScore() {
  var initials = document.getElementById("initials").value;
  console.log("initials=" + initials);
}
