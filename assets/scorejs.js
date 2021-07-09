var highScoreContainerEl = document.querySelector(".high-score-container");
var highScoreULEl = document.querySelector(".score-list");
var clearBtnEl = document.querySelector("#clear-score-btn");

var storage = localStorage.getItem("scores");
storage = JSON.parse(storage) || [];

for (var i = 0; i < storage.length; i++) {
  var scoreNum = i + 1;
  var li = document.createElement("li");
  li.textContent = scoreNum + ". " + storage[i].name + " - " + storage[i].score;
  highScoreULEl.append(li);
}

var clear = function () {
  localStorage.clear();
  highScoreULEl.innerHTML = "";
};

clearBtnEl.addEventListener("click", clear);
