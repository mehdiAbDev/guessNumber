const box = document.getElementById('box');
box
    .classList
    .add('waveAnimation');
const againBtn = document.getElementById('again');
const checkBtn = document.getElementById('check');
let score = 20;
const scoreDom = document.getElementById('num');
scoreDom.textContent = score;
let highScore = document.getElementById('high');
const theBox = document.getElementById('the_box');
let theRandomNumber = Math.trunc(Math.random() * 21);
let highscore = 0;
const theMessage = document.getElementById('display');
const setRandom = function () {
    theRandomNumber = Math.trunc(Math.random() * 21)
}
const display = function (display) {
    theMessage.textContent = `${display}`;
}
const resetGame = function () {
    display('Start Guessing . . .');
    setRandom();
    score = 20
    scoreDom.textContent = score;
    theBox
        .classList
        .remove('correctTheBox', 'correctBox');
    box
        .classList
        .add('waveAnimation');
}
const checkNumber = function () {
    const theGuess = Number(document.getElementById('the_guess').value);
    if (theGuess === null || theGuess === '') {
        theMessage.textContent = 'Please enter a number';
    } else if (theGuess === theRandomNumber) {
        theBox
            .classList
            .add('correctTheBox', 'correctBox');
        box
            .classList
            .remove('waveAnimation');
        highscore = Math.max(score, highscore);
        highScore.textContent = highscore;
        display('Correct ✅');
    } else {
        if (score > 1) {
            score--;
            display(
                theGuess > theRandomNumber
                    ? 'Go down 🔽'
                    : 'Go up 🔼'
            );
        } else {
            display('You lost the game 💥');
        }
        scoreDom.textContent = score;
    }

}
const theGuessInput = document.getElementById('the_guess');
theGuessInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        checkNumber();
    }
});

document.addEventListener('keypress', function (event) {
    if (event.key === 'r') {
        resetGame();
    }
});
checkBtn.addEventListener('click', function () {
    checkNumber();
})

againBtn.addEventListener('click', function () {
    resetGame();
})
