// Elements
var bodyEl = document.querySelector("body");
var welcomeContainerEl = document.querySelector(".welcome-container");
var startBtnEl = document.querySelector(".start-btn");
var timerSpanEl = document.getElementById("timer-counter");
var welcomeBannerEl = document.querySelector(".welcome-banner");

var timeLeft = 60;

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
      alert("boom");
    }
  }, 1000);
}

// Remove Function
var remover = function () {
  var target = Array.from(welcomeContainerEl.children);

  for (var i = 0; i < target.length; i++) {
    var targetSingle = target[i];
    targetSingle.remove();
  }
};

// Welcome disappear Function
// var welcomeDisappear = function () {
//   var welcomeBannerEl = document.querySelector(".welcome-banner");
//   welcomeBannerEl.remove();

//   var welcomeTextEl = document.querySelector(".welcome-text");
//   welcomeTextEl.remove();

//   startBtnEl.remove();
// };

// Questions Function
var questions = function () {
  var questionContainer = document.createElement("div");
  questionContainer.classList.add("questions");

  var questionPrompt = document.createElement("h2");
  questionPrompt.innerText = questionArr[0].q;
  questionPrompt.classList.add("question-banner");

  var q1a1 = document.createElement("button");
  q1a1.innerText = "1. " + questionArr[0].a1;
  q1a1.classList.add("btn");
  q1a1.classList.add("q-btn");
  q1a1.setAttribute("solution", questionArr[0].s1);

  var q1a2 = document.createElement("button");
  q1a2.innerText = "2. " + questionArr[0].a2;
  q1a2.classList.add("btn");
  q1a2.classList.add("q-btn");
  q1a2.setAttribute("solution", questionArr[0].s2);

  var q1a3 = document.createElement("button");
  q1a3.innerText = "3. " + questionArr[0].a3;
  q1a3.classList.add("btn");
  q1a3.classList.add("q-btn");
  q1a3.setAttribute("solution", questionArr[0].s3);

  var q1a4 = document.createElement("button");
  q1a4.innerText = "4. " + questionArr[0].a4;
  q1a4.classList.add("btn");
  q1a4.classList.add("q-btn");
  q1a4.setAttribute("solution", questionArr[0].s4);

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
  remover();
  questions();
};

startBtnEl.addEventListener("click", startGame);

// Anwer button handler Function
var anwserContainerButtonHandler = function (event) {
  var targetEl = event.target;

  if (targetEl.matches("[solution=true]")) {
    timerSpanEl.innerText = "you did it!";
  } else if (targetEl.matches("[solution=false]")) {
    timerSpanEl.innerText = "you didn't do it!";
  } else {
    return;
  }
};

welcomeContainerEl.addEventListener("click", anwserContainerButtonHandler);
