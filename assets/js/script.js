var timeEl = document.querySelector(".time");
var secondsLeft = 300

var Begin = document.querySelector("#Begin");
var beginningText = document.querySelector("beginningText")

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

setTime()

Begin.addEventListener("click", function() {
    beginningText.remove()



})