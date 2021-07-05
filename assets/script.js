// Elements
var bodyEl = document.querySelector("body");
var welcomeContainerEl = document.querySelector(".welcome-container");
var startBtnEl = document.querySelector(".start-btn");
var timerSpanEl = document.getElementById("timer-counter");
var welcomeBannerEl = document.querySelector(".welcome-banner");
var rightOrWrongEl = document.querySelector(".right-or-wrong");
var rightOrWrongH3El = document.getElementById("anwser-feedback");
var timeLeft = 60;
var questionCounter = 0;

// Question Array
var questionArr = [
  // Question 1
  {
    q: "Commonly used data types DO Not Include:",
    a1: "strings",
    s1: false,
    a2: "booleans",
    s2: false,
    a3: "alerts",
    s3: true,
    a4: "numbers",
    s4: false,
  },
  // Question 2
  {
    q: "The condition in an if/else statemtne is enclosed with_____",
    a1: "quotes",
    s1: false,
    a2: "curly brackets",
    s2: false,
    a3: "parenthesis",
    s3: true,
    a4: "square brackets",
    s4: false,
  },
  // Question 3
  {
    q: "Arrays in Java Script can be used to store _____",
    a1: "numbers and strings",
    s1: false,
    a2: "other arrays",
    s2: false,
    a3: "booleans",
    s3: false,
    a4: "all of the above",
    s4: true,
  },
  // Question 4
  {
    q: "String values must be enclosed within _____ when being assigned to variables.",
    a1: "commas",
    s1: false,
    a2: "curly brackets",
    s2: false,
    a3: "quotes",
    s3: true,
    a4: "parenthesis",
    s4: false,
  },
  // Question 5
  {
    q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a1: "JavaScript",
    s1: false,
    a2: "terminal/bash",
    s2: false,
    a3: "for loops",
    s3: false,
    a4: "console.log",
    s4: true,
  },
];

// Timer Countdown
function countDown() {
  var timeInterval = setInterval(function () {
    console.log(timeLeft);
    timerSpanEl.textContent = timeLeft;
    timeLeft--;
    if (timeLeft < -1) {
      clearInterval(timeInterval);
      timerSpanEl.textContent = "0";
    }
  }, 1000);
}

// Remove Function
var remover = function () {
  var removerTarget = Array.from(welcomeContainerEl.children);

  for (var i = 0; i < removerTarget.length; i++) {
    var removerTargetSingle = removerTarget[i];
    removerTargetSingle.remove();
  }
};

// Questions Function
var questions = function () {
  var questionContainer = document.createElement("div");
  questionContainer.classList.add("questions");

  var questionPrompt = document.createElement("h2");
  questionPrompt.innerText = questionArr[questionCounter].q;
  questionPrompt.classList.add("question-banner");

  var q1a1 = document.createElement("button");
  q1a1.innerText = "1. " + questionArr[questionCounter].a1;
  q1a1.classList.add("btn");
  q1a1.classList.add("q-btn");
  q1a1.setAttribute("solution", questionArr[questionCounter].s1);

  var q1a2 = document.createElement("button");
  q1a2.innerText = "2. " + questionArr[questionCounter].a2;
  q1a2.classList.add("btn");
  q1a2.classList.add("q-btn");
  q1a2.setAttribute("solution", questionArr[questionCounter].s2);

  var q1a3 = document.createElement("button");
  q1a3.innerText = "3. " + questionArr[questionCounter].a3;
  q1a3.classList.add("btn");
  q1a3.classList.add("q-btn");
  q1a3.setAttribute("solution", questionArr[questionCounter].s3);

  var q1a4 = document.createElement("button");
  q1a4.innerText = "4. " + questionArr[questionCounter].a4;
  q1a4.classList.add("btn");
  q1a4.classList.add("q-btn");
  q1a4.setAttribute("solution", questionArr[questionCounter].s4);

  welcomeContainerEl.append(
    questionContainer,
    questionPrompt,
    q1a1,
    q1a2,
    q1a3,
    q1a4
  );
};

var startGame = function () {
  countDown();
  remover();
  questions();
};

startBtnEl.addEventListener("click", startGame);

// Anwer button handler Function
var anwserContainerButtonHandler = function (event) {
  var targetEl = event.target;

  if (targetEl.matches("[solution=true]")) {
    rightOrWrongEl.style = "block";
    rightOrWrongH3El.innerText = "Correct";
  } else if (targetEl.matches("[solution=false]")) {
    timeLeft = timeLeft - 10;
    rightOrWrongEl.style = "block";
    rightOrWrongH3El.innerText = "Wrong";
  } else {
    return;
  }

  if (timeLeft <= 0) {
    alert("game over");
  } else {
    if (questionCounter < 4) {
      questionCounter++;
      console.log(questionCounter);
      remover();
      questions();
    } else {
      timerSpanEl.innerText = "0";
      alert("game over");
    }
  }
};

welcomeContainerEl.addEventListener("click", anwserContainerButtonHandler);
