function checkAnswers(){
    // pointer to the form
    var frmQuiz = document.getElementById("frmQuiz");
    // track the score
    var score = 0;

    // check the answer for Question 1
    // set a pointer to the q1
    var q1 = frmQuiz.elements("radQ1");
    // check if the correct value was chosen
    if (q1.value == "b"){
        // add 1 to the score, since the correct answer was chosen
        score++;
    }

    // check the answer for Question 2
    // set a pointer to the q2
    var q2 = frmQuiz.elements("radQ2");
    // check if the correct value was chosen
    if (q2.value == "a"){
        // add 1 to the score, since the correct answer was chosen
        score++;
    }

    // pointer to divScore
    var divScore = document.getElementById("divScore");

    // display the score on the div
    divScore.textContent = "Your score is: " + score;
}

// add event listener to quiz form submit button to handle the form submission
var frmQuiz = document.getElementById("frmQuiz");
frmQuiz.addEventListener("submit", function(event){
    event.preventDefault(); // prevent the form from being submitted
    checkAnswers(); // call the function to check the answers
});