var timeEl = document.querySelector(".time");
var secondsLeft = 300
var begin = document.getElementById('begin');
var beginButton = document.getElementById('beginButton');

var questions = document.getElementById('questions');
var scoreboard = document.getElementById('scoreboard');
var results = document.getElementById('results')
let questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts'
  }
  {
    title: 'The condition in an if /else statement is enclosed within ______ .',
    choices: ['Quotes', 'Curly Brackets', 'Parentheses', 'Square Brackets'],
    answer: 'Parenthesis'
  }
  {
    title: 'Array in JavaScript can be used to store ______ .',
    choices: ['Numbers and Strings', 'Other Arrays', 'Booleans', 'All of the Above'],
    answer: 'All of the above'
  }
  {
    title: 'String values must be enclosed within ______ when being assigned to variables',
    choices: ['Commas', 'Curly Brackets', 'Quotes,', 'Parenthesis'],
    answer: 'Quotes'
  }
  {
    title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['Javascript', 'Terminal/bash', 'For Loops', 'console.log'],
    answer: 'console.log'
  }
]


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