
// renders start of quiz (first view)
function generateStart(){
    $("header").append(startFinishHtml[0].header);
    $("main").append(startFinishHtml[0].main);
}
// starts quiz when start button is clicked
function handleStartButton(){
    $("#start").on('click', (function(event) {
        event.preventDefault();
        $("h1").remove();
        $("button").remove();
        $("p").remove();
        // renders first question
        generateQuestion();
    }))
    
}

// function to remove current rendered question
function removeQuestion(){
    $(".question-container").remove();
    $("header").find("h2").remove();
}
// function used to render questions
function generateQuestion(){
    // set html for header
    $("header").append(`<h2>Question ${questionData[questionArrayIndex].questionNumber}/5</h2>`);
    // set html for main 
    
    $("main").append(`<div class="question-container">
    <h3>${questionData[questionArrayIndex].question}</h3>
    <form id="questions">
        <fieldset>
            <legend class="question">${questionData[questionArrayIndex].question}</legend>
            <input type="radio" name="answer" id="answer-one" value="0">
            <label for="answer-one">${questionData[questionArrayIndex].answers[0]}</label>
            <br>
            <input type="radio" name="answer" id="answer-two" value="1">
            <label for="answer-two">${questionData[questionArrayIndex].answers[1]}</label>
            <br>
            <input type="radio" name="answer" id="answer-three" value="2">
            <label for="answer-three">${questionData[questionArrayIndex].answers[2]}</label>
            <br>
            <input type="radio" name="answer" id="answer-four" value="3">
            <label for="answer-four">${questionData[questionArrayIndex].answers[3]}</label>
        </fieldset>
        <button type="button" id="submit">Submit</button>
        <h3>Score ${score}/5</h3>
        </form>
        </div>`
        
            );
}

// function to render comment
// comment will let user know if they got the question right or wrong rendered below selected answer
// function will use the selected answers input id in order to render comment below this answer using its label
function generateComment(radioId, isCorrect){
    if (isCorrect === true){
        $("main").find(`label[for=${radioId}]`).after("<p class='comment'>Good job that is correct!</p>");
    }
    else {
        $("main").find(`label[for=${radioId}]`).after("<p class='comment'>That is incorrect good try!</p>");
    }
}

// function renderse retake button
function generateRetakeButton(){
    $("main").find("fieldset").after(`<button type="button" id="retake">Retake</button>`);
}

// function renders the quiz results
function generateResults(){
    // find quiz results percentage to be displayed
    let percent = score/5 * 100;
    $("header").find("h2").before(`<h2>Your final score is ${score}/5 ${percent}%</h2>`);
}

// function renders next button
// function handles isButtonSubmit and questionArrayIndex 
function generateNextButton(){
    // remove submit button
    $("main").find("#submit").remove();
    // replace submit button with retake button if on last question
    if (questionData[questionArrayIndex].questionNumber === 5){
        generateRetakeButton();
        generateResults();
    }
    else {
    // replace submit button with next button
    $("main").find("fieldset").after(`<button type="button" id="next">Next>></button>`);
    }
    // change isButtonSubmit to false since it has been converted into the next button
    isButtonSubmit = false;
    // add 1 to the questionArrayIndex in preperation to render next question once next button is clicked
    questionArrayIndex ++;
}

// function renders submit button
// function handles isButtonSubmit
function generateSubmitButton(){
    // find button with submit id and change its text to "submit"
    $("main").find("#submit").text("Submit");
    // set isButtonSubmit to true since it is now a submit button
    isButtonSubmit = true;
}

// renders current score
function renderScore(){
    $("form").find("h3").text(`Score ${score}/5`);
}

// function used to handle when submit button is clicked
function handleSubmit(){

    $("body").on("click", "#submit", function(event){
        event.preventDefault();
        if (!$("input[name=answer]:checked").val()) {
            alert('Please select an answer!');
            return;
         }
        // create variable and set it to the chosen answers value
        let chosenAnswer = $("input[name=answer]:checked").val();
        // create variable and set it to the chosen answers input id
        let chosenAnswerId = $("input[name=answer]:checked").attr('id');
        // create bool variable to be used to store if user answered question correctly or not
        let isCorrect;
        // test if user has answered the question correctly or not
        if (chosenAnswer == questionData[questionArrayIndex].correctAnswer){
            isCorrect = true;
            score ++;
        }
        else {
            isCorrect = false;
        }
        renderScore();
        generateNextButton();
        generateComment(chosenAnswerId, isCorrect);
   
    })
}


// function to handle next button when clicked
function handleNext(){
    $("body").on("click", "#next", function(event){
        event.preventDefault();
        removeQuestion();
        generateQuestion();
    })
}

// function to handle retake button when clicked
function handleRetake(){
    $("body").on("click", "#retake", function(event){
        event.preventDefault();
        removeQuestion();
        // reset variables
        score = 0;
        questionArrayIndex = 0;
        isButtonSubmit = true;
        generateQuestion();
    })
}

function handleQuizApp(){
    generateStart();
    handleStartButton();
    handleSubmit();
    handleNext();
    handleRetake();
}