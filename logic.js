var userAnswer;
var num1;
var num2;
var answer;
var totalQuestions = 0;
var score = 0;

var questionContainer;
var sec = 10; //start time
//^^ gives 10 seconds to answer the question
// var 
var timerElement;



//TODO: add something to store data locally
//  add something so that users can see their high score total
//  DONE: add a time function
//  add a end round functionality
//  allow user to change which type of question they get (multiplication, addition, etc)
//  allow user to change number range
//  show stats for each one: mean accuracy, outliers, etc
//  DONE: autoscroll when user adds an answer so page always stays at the bottom





document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM is fully loaded!");
    questionContainer = document.getElementById("question")
    timerElement = document.getElementById("timer")
    console.log(questionContainer);
    onStart();
});

function onStart(){
    console.log("started");
    generateQuestion();
    startTimer();
}

function handleSubmit(event){
    //this part gets the answer
    console.log("answer submitted");
    event.preventDefault();
    userAnswer = document.getElementById("answer").value;
    document.getElementById("answer").value = "";
    
    handleSubmitHelper();
}

function handleSubmitHelper(){
    //reset timer
    sec = 10;

    // alert(`your answer is: ${answer}`);
    //this part checks the answer and based on that it updates the scores and stuff
    if(checkAnswer()){//if correct
        score ++;
        totalQuestions ++;
        document.getElementById("question"+(totalQuestions-1)).style.color = "green";//change text color to green
        // document.getElementById();
        updateScores();

    } else {//if wrong
        totalQuestions ++;//increase total question count
        document.getElementById("question"+(totalQuestions-1)).style.color = "red";//change color of text to red
        updateScores();
    }

    

    //this part updates everything now
    

    //wait and then call generate question again
    // setTimeout(generateQuestion, 1000);

    //don't wait, generate quetsion
    generateQuestion();
}

function checkAnswer(){
    return (userAnswer == answer);
}

function generateQuestion(){
    num1 = Math.round(Math.random() * 100);
    num2 = Math.round(Math.random() * 100);
    answer = num1 - num2;

    //create a new line of text
    const temp = document.createElement("span");
    temp.id = "question" + totalQuestions;
    temp.textContent = num1 + " - " + num2 + " = ";

    //Add a line break and then add the new line of text created above
    questionContainer.appendChild(document.createElement("br"));
    questionContainer.appendChild(temp);
    setTimeout(() => {
        // container.scrollTop = container.scrollHeight;
        (document.getElementsByClassName("scrollable-content")[0]).scrollTop = (document.getElementsByClassName("scrollable-content")[0]).scrollHeight;
        const container = document.getElementsByClassName("scrollable-content")[0];
        console.log(container)
    }, 0);
    console.log(document.getElementsByClassName("scrollable-content")[0])
    console.log(document.getElementsByClassName("scrollable-content")[0].scrollTop);
    document.getElementsByClassName("scrollable-content")[0].scrollTop = 2000;
    // document.getElementById("question").innerHTML = num1 + " + " + num2 + " = ";
    console.log(document.getElementById("question").scrollTop);
    // document.getElementById("question").scrollTop = 100;

}

function updateScores(){
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("Accuracy").innerHTML = "Accuracy: " + Math.round((score/totalQuestions) * 100) + " %";
    // if()
    questionContainer.innerHTML += userAnswer;
    // document.getElementById("question").innerHTML = num1 + " + " + num2 + " = " + userAnswer;
    document.getElementById("totalQuestions").innerHTML = "Total Questions Answered: " + totalQuestions;
}




function formatTime(sec){
    const hours = String(Math.floor(sec / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
  const seconds = String(sec % 60);
  return "Time left: " + seconds + " seconds";
//   return `${hours}:${minutes}:${seconds}`;
}



// Handles the time stuff of everything
//starts the time and ticks down one second each second and updates the html
function startTimer() {
    setInterval(() => {
        console.log("time updated");
        sec--;
        timerElement.textContent = formatTime(sec);
        //check the time
        //if the time is less than/equal to 0, the answer was wrong
        if(sec <= 0){
            userAnswer = "";
            handleSubmitHelper();
        }
    }, 1000);
}
