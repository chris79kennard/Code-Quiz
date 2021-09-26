const introCard = document.getElementById("intro");
const questionCard = document.getElementById("question");
const enterHighScoreCard = document.getElementById("enterHighScore");
const viewHighsScoreCard = document.getElementById("viewHighScore");

const cards = [introCard, questionCard, enterHighScoreCard, viewHighsScoreCard];

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
  showQuestion(
    "How many miles did Goku run to see his Sensei?",
    "5,000",
    "15,000",
    "10,000",
    "500,000"
  );
}

function showQuestion(
  questionToAsk,
  choiceOne,
  choiceTwo,
  choiceThree,
  choiceFour
) {
  var questionText = document.getElementById("questionText");
  questionText.innerText = questionToAsk;
  updateChoice(document.getElementById("answer1"), choiceOne);
  updateChoice(document.getElementById("answer2"), choiceTwo);
  updateChoice(document.getElementById("answer3"), choiceThree);
  updateChoice(document.getElementById("answer4"), choiceFour);
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
}

function saveHighScore() {
  var initials = document.getElementById("initials").value;
  console.log("initials=" + initials);
}
