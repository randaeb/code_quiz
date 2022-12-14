//Made the variables I will use throughout the code.

var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var section4 = document.getElementById("section4");
var question = document.getElementById("question");
var start = document.getElementById("startbtn");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var counter = 0
var input = document.getElementById("initials");
var save = document.getElementById("save");
var timeEl = document.getElementById("time");
var timeInterval 
var playAgain = document.getElementById("playAgain");

//Created questions for the quiz, and provided both the choices and answers in an array. 

var questions = [
    {
      question: "What does CSS stand for?", 
      choices: ["1.Creative Style Sheets", "2.Cascading Style Sheets", "3.Circular Style Screen", "4.Cascading Style Scripts"],
      answer: "2.Cascading Style Sheets"
    },
    {
      question: "Which of the following is not a core component of Bootstrap.", 
      choices: ["1.container", "2.row", "3.curl", "4.column"],
      answer: "3.content"
    },  
    {
      question: "What does the splice( ) method do?", 
      choices: ["1.changes the contents of an array by removing or replacing elements", "2.gets rid of extra space before or after a word", "3.converts a string to an object", "4.makes requests from the browser"],
      answer: "1.changes the contents of an array by removing or replacing elements"
    },  
  ]
  //Made the play again button functional.
playAgain.addEventListener("click", function(){
    window.location.reload()
})
//Created a button that would save the scores, and then stored them in local storage. 
save.addEventListener("click", function(){
    var initials = input.value 
    var highScores = JSON.parse(localStorage.getItem("scores")) ||[ ]
    highScores.push({initials, score:secondsLeft})
    localStorage.setItem("scores",JSON.stringify(highScores))
    section4.classList.remove("hidden")
    section3.classList.add("hidden")
    for (var i = 0; i<highScores.length; i++){
        var score = document.createElement("p")
        score.innerText=highScores[i].initials + " " + highScores[i].score
        section4.appendChild(score)
    }
})
//Made the start button functional
start.addEventListener("click", function(){
    section1.classList.add("hidden")
    section2.classList.remove("hidden")
    question.textContent = questions[counter].question;
    choice1.textContent = questions[counter].choices[0];
    choice2.textContent = questions[counter].choices[1];
    choice3.textContent = questions[counter].choices[2];
    choice4.textContent = questions[counter].choices[3];
    counter ++
    setTimer()
})

//render question
function renderQuestion(event) {
    if(counter === questions.length) { clearInterval(timeInterval);
     section2.classList.add("hidden")
     section3.classList.remove("hidden") 
     return
    }  
   console.log(counter)
question.textContent = questions[counter].question;
choice1.textContent = questions[counter].choices[0];
choice2.textContent = questions[counter].choices[1];
choice3.textContent = questions[counter].choices[2];
choice4.textContent = questions[counter].choices[3];
counter ++
}


//Made buttons for each choice option available for a question. 
choice1.addEventListener("click", renderQuestion);
choice2.addEventListener("click", renderQuestion);
choice3.addEventListener("click", renderQuestion);
choice4.addEventListener("click", renderQuestion);


//Set up the timer. 
var secondsLeft = 30

function setTimer() {
    timeEl.textContent = secondsLeft;
    timeInterval = setInterval(function(){
    console.log(secondsLeft)
    secondsLeft--;
       timeEl.textContent = secondsLeft;
       
       if(secondsLeft === 0) {
        clearInterval(timeInterval);
         sendMessage();

     }

   },1000) 
       

        

   }


