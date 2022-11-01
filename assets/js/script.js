document.addEventListener("DOMContentLoaded", function() { 
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("klick", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("you klicked submit!");

            }else {
                let gameType = this.getAttribute("data-type");
                alert(`You klicked ${gameType}`);
            }
        })
    }

})

function runGame() {

}
function checkAnswer() {

}
function calculateCorrectAnswer() {

}
function incrementScore() {

}
function incrementWrongAnswer() {

}
function displayAdditionQuestion() {

}
function displaySubtractQuestion() {

}
function displayMultiplyQuestion() {

}