var timeEl = document.querySelector(".time");
var secondsLeft = 300
var begin = document.getElementById('begin');
var beginButton = document.getElementById('beginButton');

var questions = document.getElementById('questions');
var scoreboard = document.getElementById('scoreboard');
var results = document.getElementById('results')


function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}
beginButton.addEventListener("click", function() {
    begin.className = "hide"
    questions.className = ""
    setTime()
})