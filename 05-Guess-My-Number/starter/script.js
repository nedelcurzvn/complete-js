'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Corect number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.guess').value = 2345;
// console.log(document.querySelector('.guess').value);
let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'No input number';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'You guessed the number';
    }
    if (score > 0) {
        if (guess > secretNumber) {
            document.querySelector('.message').textContent = 'Too high';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if (guess < secretNumber) {
            document.querySelector('.message').textContent = 'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }
    } else {
        document.querySelector('.message').textContent = 'You lost the game!';
    }

})