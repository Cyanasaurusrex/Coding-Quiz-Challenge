var timeEl = document.getElementById('time');
var secondsLeft = 50

var beginButton = document.getElementById('beginButton');
// variables for displaying question / answer / score
var title = document.getElementById('title')
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var verify = document.getElementById('verify')
var displayScore = document.getElementById('displayScore')

// variables for different stages of quiz
var begin = document.getElementById('begin');
var quiz = document.getElementById('quiz');
var scoreboard = document.getElementById('scoreboard');
var results = document.getElementById('results')
var viewScoreboard = document.getElementById('viewScoreboard')
var resultsContent = document.getElementById('resultsContent')
var returnBegin = document.getElementById('returnBegin')

// variables for logical operations
var questionNumber = 0
var score = 0

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
      quiz.className = "hide"
      timeEl.className = "hide"
      results.className = ""
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// displays the next question
function displayQuestion() {
  if (questionNumber  == questions.length) {
    displayResults()
  }
  else{
    title.textContent = questions[questionNumber].title
    option1.textContent = questions[questionNumber].choices[0]
    option2.textContent = questions[questionNumber].choices[1]
    option3.textContent = questions[questionNumber].choices[2]
    option4.textContent = questions[questionNumber].choices[3]
  }
}

function displayResults() {
    quiz.className = "hide"
    timeEl.className = "hide"
    results.className = ""
    scoreboard.className = "hide"
    score = score + secondsLeft
    resultsContent.textContent = "Your final score is " + score



}
    
// checks and displays results from previous question and shows next question
function checkAnswer() {
  if (questions[questionNumber].choices[chosenAnswer] === questions[questionNumber].answer){
    verify.textContent = "Your answer for question " + (questionNumber + 1) +" is correct!"
    correct()
  }
  else {
    verify.textContent = "Your answer for question " + (questionNumber + 1) + " is wrong!" 
    incorrect()   
  }  
  
  questionNumber = questionNumber + 1
  displayQuestion()

  return questionNumber
}

function correct() {
  score = score + 10
  displayScore.textContent = "Score: " + score
  return score

}

function incorrect() {
  secondsLeft = secondsLeft -10
}


// event listeners record the selected response and call the check answer function

option1.addEventListener("click", function() {
  chosenAnswer = 0
  checkAnswer()  
})

option2.addEventListener("click", function() {
  chosenAnswer = 1
  checkAnswer()
})

option3.addEventListener("click", function() {
  chosenAnswer = 2
  checkAnswer()
})


option4.addEventListener("click", function() {
  chosenAnswer = 3
  checkAnswer()
})


// removes the beginning prompt, shows the first question + answers, 
// and starts the timer

beginButton.addEventListener("click", function() {
  begin.className = "hide"
  quiz.className = ""  
  setTime();
  displayQuestion();
})

viewScoreboard.addEventListener("click", function() {
  begin.className = "hide"
  quiz.className = "hide"
  results.className = "hide"
  scoreboard.className = ""
})

returnBegin.addEventListener("click", function() {
  begin.className = ""
  quiz.className = "hide"
  results.className = "hide"
  scoreboard.className = "hide"
})
