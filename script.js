
var currentQuestion=0;
var currentScore=0;
var currentTime=45;
var questionContainer=document.getElementById("container");
var interval;
​
​
questionContainer.addEventListener("click",function(event) {
    if(event.target.matches("li")) {
        var answer=event.target.innerText;
​
        var question=questions[currentQuestion];
​
        if(answer===question.answer) {
            currentScore++;
        } else {
            currentTime=currentTime-5;
        }
        currentQuestion++;
        if(currentQuestion>=questions.length) {
            finishQuiz();
        } else {
            showCurrentQuestion();
        }       
        
    }
});
​
function showHighScores() {
    //Retrieve high scoresvar score = 0;
var highscore = localStorage.getItem("highscore");

if(highscore !== null){
    if (score > highscore) {
        localStorage.setItem("highscore", score);      
    }
}
else{
    localStorage.setItem("highscore", score);
}

    //Display high scores
}
​
function finishQuiz() {
    clearInterval(interval);
    //Display the score
    //Store in the high scores if higher than previous score
}
​var quizQuestions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [ "strings", "booleans", "alerts", "numbers" ],
        correctAnswer: "alerts"
    },
    {
        question: 'The condition in an if/else statement is enclosed within____.',
        answers: [ "quotes", "curly brackets", "parentheses", "square brackets" ],
        correctAnswer: "parentheses"
    },
    {
        question: 'Arrays in Javascript can be used to store:',
        answers: [ "numbers", "strings", "booleans", "all of the above" ],
        correctAnswer: "all of the above"
    },
    {
        question: 'String values must be enclosed within _____when being assigned to variables.',
        answers: [ "commas", "curly brackets", "quotes", "parentheses" ],
        correctAnswer: "quotes"
    },
    {
        question: 'A very useful tool used for printing content to the debugger is:',
        answers: [ "Javascript", "terminal/bash", "for loops", "console.log" ],
        correctAnswer: "console.log"
    }

];
quizQuestions[0].question;

​
function showCurrentQuestion() {
    var question=questions[currentQuestion];
    questionContainer.innerHTML="";
​
    var questionTitle=document.createElement("h1");
    questionTitle.innerText=question.question;
    questionContainer.appendChild(questionTitle);
​
    var optionsList=document.createElement("ul");
​
    for(var i=0;i<question.options.length;i++) {
        var questionLi=document.createElement("li");
        questionLi.innerText=question.options[i];
        optionsList.appendChild(questionLi);
​
    }
    questionContainer.appendChild(optionsList);
}
​
function startQuiz() {
    showCurrentQuestion();
    // Set the interval to run every  secondfunction myFunction() {
  myVar = setInterval(showCurrentQuestion, 3000);

    // - Update the time counter
    // - Check if the time ran out
    // - If the time ran out finishQuiz()
    
    function finishQuiz() {
    clearInterval(interval);


