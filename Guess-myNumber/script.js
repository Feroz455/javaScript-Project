'use strict';
let message = document.querySelector(".message");
let number = document.querySelector(".number");
let score = document.querySelector(".score");
let guess = document.querySelector(".guess");
let again = document.querySelector(".again");
let body = document.querySelector(".mainBody");
let highscore = document.querySelector(".highscore");
guess.value = null;
let scoreNum = Number(score.textContent);
let scNum = Math.trunc(Math.random() * 20) + 1;
let Magic = 0;
let checkBtn = document.querySelector(".check");
checkBtn.addEventListener("click", () => {
    Magic = Number(guess.value);
    if (!guess.value) {
        message.textContent = "⛔ Box is empty";
    }
    else {
        scoreNum -= 1;
        score.textContent = scoreNum;
        if (scoreNum > 0) {
            guess.value = null;
            number.textContent = Magic;
            if (Magic > scNum) {
                message.textContent = "📈 Too high";
            }
            else if (Magic < scNum) {
                message.textContent = "📉 Too low";
            }
            else {
                if (Number(highscore.textContent) < Number(score.textContent)) {
                    highscore.textContent = score.textContent;
                }
                message.textContent = "🎉🎉 Correct number";
                body.style.backgroundColor = "#60b347";
                setTimeout(() => {
                    againBtn();
                }, 3000);
            }
        }
        else {
            message.textContent = "🎃 You Loos the game!!!";
            body.style.backgroundColor = "red";
            setTimeout(againBtn(), 2000);
        }
    }
})
function againBtn() {
    number.textContent = "?";
    message.textContent = "Start guessing...";
    score.textContent = "20";
    body.style.backgroundColor = "#222";
    scNum = Math.trunc(Math.random() * 20) + 1;
    Magic = 0;
    scoreNum = 20;
}
again.addEventListener("click", () => {
    window.location.reload();
})