var userAnswer;
var num1;
var num2;
var answer;

onStart();

function onStart(){
    console.log("started");
    generateQuestion();
}

function handleSubmit(event){
    console.log("answer submitted");
    event.preventDefault();
    userAnswer = document.getElementById("answer").value;
    // alert(`your answer is: ${answer}`);
    checkAnswer();

}

function checkAnswer(){
    return (userAnswer === answer);
}

function generateQuestion(){
    num1 = Math.round(Math.random() * 10);
    num2 = Math.round(Math.random() * 10);
    answer = num1 + num2;
    
}