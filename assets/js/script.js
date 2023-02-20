var timeEl = document.querySelector(".time");
var secondsLeft = 300

var beginButton = document.getElementById('beginButton');
// variables for displaying question
var title = document.getElementById('title')
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');

// variables for different stages of quiz
var begin = document.getElementById('begin');
var quiz = document.getElementById('quiz');
var scoreboard = document.getElementById('scoreboard');
var results = document.getElementById('results')

// variables for logical operations
var questionNumber = 0

let questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts'
  },
  {
    title: 'The condition in an if /else statement is enclosed within ______ .',
    choices: ['Quotes', 'Curly Brackets', 'Parentheses', 'Square Brackets'],
    answer: 'Parentheses'
  },
  {
    title: 'Array in JavaScript can be used to store ______ .',
    choices: ['Numbers and Strings', 'Other Arrays', 'Booleans', 'All of the Above'],
    answer: 'All of the Above'
  },
  {
    title: 'String values must be enclosed within ______ when being assigned to variables',
    choices: ['Commas', 'Curly Brackets', 'Quotes', 'Parenthesis'],
    answer: 'Quotes'
  },
  {
    title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['Javascript', 'Terminal/bash', 'For Loops', 'console.log'],
    answer: 'console.log',
  }
]

// function for timer
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




// displays the next question
function displayQuestion() {
  title.textContent = questions[questionNumber].title
  option1.textContent = questions[questionNumber].choices[0]
  option2.textContent = questions[questionNumber].choices[1]
  option3.textContent = questions[questionNumber].choices[2]
  option4.textContent = questions[questionNumber].choices[3]
    
}

// removes the beginning prompt, shows the first question + answers, 
// and starts the timer


beginButton.addEventListener("click", function() {
  begin.className = "hide"
  quiz.className = ""  
  setTime();
  displayQuestion();
})

option1.addEventListener("click", function() {
  if (option1.textContent === questions[questionNumber].answer){
    alert("correct")
  }
  else {
    alert("wrong")
  }
  questionNumber = questionNumber + 1
  displayQuestion()
  }
)

// event listeners

option2.addEventListener("click", function() {
  if (option2.textContent === questions[questionNumber].answer){
    alert("correct")
  }
  else {
    alert("wrong")
  }
  questionNumber = questionNumber + 1
  displayQuestion()
})

option3.addEventListener("click", function() {
  if (option3.textContent === questions[questionNumber].answer){
    alert("correct")
  }
  else {
    alert("wrong")
  }
  questionNumber = questionNumber + 1
  displayQuestion()
})

option4.addEventListener("click", function() {
  if (option4.textContent === questions[questionNumber].answer){
    alert("correct")
  }
  else {
    alert("wrong")
  }
  questionNumber = questionNumber + 1
  displayQuestion()
})
