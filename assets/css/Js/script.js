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

questionBank.push([
  "Who is Videl?",
  "Gohan's Wife",
  "Goten's Mother",
  "Vegeta's Wife",
  "Mr. Satans Great Niece",
]);

questionBank.push([
  "How Many dragon balls are there to collect on Earth in DBZ",
  "One",
  "Nine",
  "Six",
  "Seven",
]);

questionBank.push([
  "What year was Dragon Ball created? TIP - *Before DBZ and DBS*",
  "1994",
  "2001",
  "1979",
  "1984",
]);

// questionBank.push(["question", "answerA", "answerB", "answerC", "answerD"]);

const correctAnswers = [
  "10,000",
  "Vegeta",
  "Kaioken",
  "Gohan's Wife",
  "Seven",
  "1984",
];

var nextQuestion = 0;
var correctAnswer = "";
var highScore = 0;
var gameOver = false;
var currentScore = 20;
var previousPageGlobal = 0;

function viewHighScorePage(previousPage) {
  turnOffAllCards();
  previousPageGlobal = previousPage;
  viewHighsScoreCard.style.display = "block";
  goBackButton = document.getElementById("goBackButton");
  goBackButton.setAttribute("onclick", "goBack(" + previousPage + ")");
  var highScoreObject = JSON.parse(localStorage.getItem("highScoreRecord"));
  var highScoreList = document.getElementById("highScoreList");
  var noHighScores = document.getElementById("noHighScores");
  if (highScoreObject !== null) {
    highScoreList.style.display = "block";
    noHighScores.style.display = "none";
    var highScoreInitials = document.getElementById("highScoreInitials");
    var highScoreValue = document.getElementById("highScoreValue");
    highScoreInitials.innerText = highScoreObject.initials;
    highScoreValue.innerText = highScoreObject.score;
  } else {
    highScoreList.style.display = "none";
    noHighScores.style.display = "block";
  }
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
  var tmp = document.getElementById("hoverViewHighScore");
  tmp.setAttribute("onclick", "viewHighScorePage(1)");
  showQuestion();
  var timerInterval = setInterval(function () {
    var currentScoreEl = document.getElementById("currentScore");

    if (gameOver) {
      // Stops execution of action at set interval

      clearInterval(timerInterval);
      var previousHighScore; //This is the value that is stored as the high score before the game starts
      previousHighScore = 0;
      var highScoreObject = JSON.parse(localStorage.getItem("highScoreRecord"));
      if (highScoreObject !== null) {
        previousHighScore = highScoreObject.score;
      }

      if (previousHighScore < currentScore) {
        enterHighScore();
      } else {
        viewHighScorePage(0);
      }

      // Calls function to create and append image
    }

    // i dont know if this is correct i dont think it is but i worked if timer hits zero game over. view your high score pops up
    if (currentScore < 0) {
      clearInterval(timerInterval);
      gameOver = true;
      viewHighScorePage(0);
    }
    currentScore--;
    currentScoreEl.innerText = currentScore;
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

function goBack(previousPage) {
  turnOffAllCards();
  cards[previousPage].style.display = "block";
}

// need to be able to move on to next question
// function setNextQuestion() {}
// need to be able to select a answer
function selectAnswer(choice) {
  var displayResults = document.getElementById("questionResult");

  if (choice == correctAnswer) {
    displayResults.innerText = "correct";
    currentScore = currentScore + 10;
  } else {
    displayResults.innerText = "wrong";
    currentScore = currentScore - 10;
  }
  nextQuestion++;
  if (questionBank.length > nextQuestion) {
    showQuestion();
  } else {
    gameOver = true;

    //end of game
  }
}

function enterHighScore() {
  turnOffAllCards();
  enterHighScoreCard.style.display = "block";
  document
    .getElementById("hoverViewHighScore")
    .setAttribute("onclick", "viewHighScorePage(2)");
}

function startNewGame() {
  currentScore = 20;
  nextQuestion = 0;
  gameOver = false;
  var displayResults = document.getElementById("questionResult");
  displayResults.innerText = "";
  startGame();
}

function clearHighScore() {
  localStorage.removeItem("highScoreRecord");
  viewHighScorePage(previousPageGlobal);
}

function saveHighScore() {
  var initials = document.getElementById("initials");
  console.log(currentScore);
  var highScoreObject = {
    initials: initials.value,
    score: currentScore,
  };

  localStorage.setItem("highScoreRecord", JSON.stringify(highScoreObject));
  viewHighScorePage(0);
}
