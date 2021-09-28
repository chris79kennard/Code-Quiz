const introCard = document.getElementById("intro");
const questionCard = document.getElementById("question");
const enterHighScoreCard = document.getElementById("enterHighScore");
const viewHighsScoreCard = document.getElementById("viewHighScore");

const cards = [introCard, questionCard, enterHighScoreCard, viewHighsScoreCard];
var NameCard = document.querySelector(".card");
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

questionBank.push([
  "What was Goku's first power-up technique called in DBZ?",
  "Saiyan Rage",
  "Kaioken",
  "Super Saiyan",
  "Ultimate Kakarot",
]);

// questionBank.push([
//   "Who is Videl?",
//   "Gohan's Wife",
//   "Goten's Mother",
//   "Vegeta's Wife",
//   "Mr. Satans Great Niece",
// ]);

// questionBank.push([
//   "How Many dragon balls are there to collect on Earth in DBZ",
//   "One",
//   "Nine",
//   "Six",
//   "Seven",
// ]);

// questionBank.push([
//   "What year was Dragon Ball created? TIP - *Before DBZ and DBS*",
//   "1994",
//   "2001",
//   "1979",
//   "1984",
// ]);

// questionBank.push(["question", "answerA", "answerB", "answerC", "answerD"]);

const correctAnswers = [
  "10,000",
  "Vegeta",
  // "Kaioken",
  // "Gohan's Wife",
  // "Seven",
  // "1984",
];

var nextQuestion = 0;
var correctAnswer = "";
var highScore = 0;
var gameOver = false;
var currentScore = 100;

function viewHighsScorePage() {
  turnOffAllCards();
  viewHighsScoreCard.style.display = "block";
}

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
  var timerInterval = setInterval(function () {
    var currentScoreEl = document.getElementById("currentScore");
    currentScoreEl.innerText = currentScore;
    currentScore--;
    console.log("currentScore " + currentScore);

    if (gameOver) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      viewHighsScorePage();
      // Calls function to create and append image
    }
  }, 1000);
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
  var displayResults = document.getElementById("questionResult");

  if (choice == correctAnswer) {
    displayResults.innerText = "correct";
  } else {
    displayResults.innerText = "wrong";
  }
  nextQuestion++;
  if (questionBank.length > nextQuestion) {
    showQuestion();
  } else {
    gameOver = true;
    //end of game
  }
}

// function scoreBoard() {
//   enterHighScoreCard.style.display = "block";
// }

function saveHighScore() {
  var initials = document.getElementById("initials").value;
  console.log("initials=" + initials);
}
