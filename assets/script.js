// Elements
var bodyEl = document.querySelector("body");
var welcomeContainerEl = document.querySelector(".welcome-container");
var startBtnEl = document.querySelector(".start-btn");
var timerSpanEl = document.getElementById("timer-counter");
var welcomeBannerEl = document.querySelector(".welcome-banner");

// Timer Countdown
function countDown() {
  var timeLeft = 60;

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

// Welcome disappear Function
var welcomeDisappear = function () {
  var welcomeBannerEl = document.querySelector(".welcome-banner");
  welcomeBannerEl.remove();

  var welcomeTextEl = document.querySelector(".welcome-text");
  welcomeTextEl.remove();

  startBtnEl.remove();
};

// Question 1 Function
var question1 = function () {
  welcomeDisappear();

  var questionContainer = document.createElement("div");
  questionContainer.classList.add("questions");

  var questionPrompt = document.createElement("h2");
  questionPrompt.innerText = "This will be a question";
  questionPrompt.classList.add("question-banner");

  var q1a1 = document.createElement("button");
  q1a1.innerText = "Question 1 Anwser 1";
  q1a1.classList.add("btn");
  q1a1.classList.add("q-btn");

  var q1a2 = document.createElement("button");
  q1a2.innerText = "Question 1 Anwser 2";
  q1a2.classList.add("btn");
  q1a2.classList.add("q-btn");

  var q1a3 = document.createElement("button");
  q1a3.innerText = "Question 1 Anwser 3";
  q1a3.classList.add("btn");
  q1a3.classList.add("q-btn");

  var q1a4 = document.createElement("button");
  q1a4.innerText = "Question 1 Anwser 4";
  q1a4.classList.add("btn");
  q1a4.classList.add("q-btn");

  welcomeContainerEl.append(
    questionContainer,
    questionPrompt,
    q1a1,
    q1a2,
    q1a3,
    q1a4
  );
};

startBtnEl.addEventListener("click", question1);
