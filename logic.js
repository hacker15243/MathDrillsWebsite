var userAnswer;
var num1;
var num2;
var answer;
var totalQuestions = 0;
var score = 0;

var questionContainer;


document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM is fully loaded!");
    questionContainer = document.getElementById("question")
    console.log(questionContainer);
    onStart();
});

function onStart(){
    console.log("started");
    generateQuestion();
}

function handleSubmit(event){
    //this part gets the answer
    console.log("answer submitted");
    event.preventDefault();
    userAnswer = document.getElementById("answer").value;
    document.getElementById("answer").value = "";
    // alert(`your answer is: ${answer}`);
    //this part checks the answer and based on that it updates the scores and stuff
    if(checkAnswer()){
        score ++;
        totalQuestions ++;
    } else {
        totalQuestions ++;
    }

    //this part updates everything now
    updateScores();

    //wait and then call generate question again
    // setTimeout(generateQuestion, 1000);

    //don't wait, generate quetsion
    generateQuestion();

}

function checkAnswer(){
    return (userAnswer == answer);
}

function generateQuestion(){
    num1 = Math.round(Math.random() * 12);
    num2 = Math.round(Math.random() * 12);
    answer = num1 * num2;

    //create a new line of text
    const temp = document.createElement("span");
    temp.textContent = num1 + " x " + num2 + " = ";

    //Add a line break and then add the new line of text created above
    questionContainer.appendChild(document.createElement("br"));
    questionContainer.appendChild(temp);
    // document.getElementById("question").innerHTML = num1 + " + " + num2 + " = ";
}

function updateScores(){
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("Accuracy").innerHTML = "Accuracy: " + Math.round((score/totalQuestions) * 100) + " %";
    questionContainer.innerHTML += userAnswer;
    // document.getElementById("question").innerHTML = num1 + " + " + num2 + " = " + userAnswer;
    document.getElementById("totalQuestions").innerHTML = "Total Questions Answered: " + totalQuestions;
}